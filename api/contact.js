import { Resend } from 'resend'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import { parseMultipart } from './_lib/parseMultipart.js'
import { validatePrdAttachment, MAX_BYTES } from './_lib/validatePrdAttachment.js'
import { sanitizeField, isValidEmail } from './_lib/sanitizeField.js'
import { looksLikeBot } from './_lib/looksLikeBot.js'
import { validateReason, ownerSubjectFor } from './_lib/contactReason.js'
import { visitorConfirmationFor } from './_lib/visitorConfirmation.js'

const resend = new Resend(process.env.RESEND_API_KEY)
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
  prefix: 'contact',
})

function isSameOrigin(req) {
  const origin = req.headers.origin
  if (!origin) return false
  try {
    return new URL(origin).host === req.headers.host
  } catch {
    return false
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, reason: 'method-not-allowed' })
    return
  }

  if (!isSameOrigin(req)) {
    res.status(403).json({ ok: false, reason: 'forbidden' })
    return
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  const { success } = await ratelimit.limit(ip)
  if (!success) {
    res.status(429).json({ ok: false, reason: 'rate-limited' })
    return
  }

  let fields
  let file
  try {
    ;({ fields, file } = await parseMultipart(req, { maxFileBytes: MAX_BYTES }))
  } catch (error) {
    if (error.code === 'FILE_TOO_LARGE') {
      res.status(400).json({ ok: false, reason: 'too-large' })
      return
    }
    console.error('contact: failed to parse request', error)
    res.status(400).json({ ok: false, reason: 'bad-request' })
    return
  }

  if (looksLikeBot(fields)) {
    // Pretend success so the bot doesn't learn anything from the response.
    res.status(200).json({ ok: true })
    return
  }

  const name = sanitizeField(fields.name || '', 200)
  const email = sanitizeField(fields.email || '', 200)
  const message = sanitizeField(fields.message || '', 5000)
  const reason = sanitizeField(fields.reason || '', 50)
  const customReason = sanitizeField(fields.customReason || '', 200)
  const language = fields.language === 'de' ? 'de' : 'en'

  if (!name || !isValidEmail(email) || !message) {
    res.status(400).json({ ok: false, reason: 'invalid-fields' })
    return
  }

  const reasonCheck = validateReason({ reason, customReason })
  if (!reasonCheck.ok) {
    res.status(400).json({ ok: false, reason: 'invalid-reason' })
    return
  }

  let attachments
  if (file) {
    const attachment = validatePrdAttachment({ filename: file.filename, buffer: file.buffer })
    if (!attachment.ok) {
      res.status(400).json({ ok: false, reason: attachment.reason })
      return
    }
    attachments = [{ filename: attachment.safeFilename, content: file.buffer }]
  }

  try {
    await resend.emails.send({
      from: 'Contact form <contact@mail.ahouraazarbin.com>',
      to: 'ahouraazarbin@gmail.com',
      replyTo: email,
      subject: ownerSubjectFor({ reason, customReason, name }),
      text: `${message}\n\nFrom: ${name} <${email}>`,
      ...(attachments ? { attachments } : {}),
    })
  } catch (error) {
    console.error('contact: failed to send owner email', error)
    res.status(502).json({ ok: false, reason: 'send-failed' })
    return
  }

  // The lead is already delivered at this point — a failed confirmation email
  // shouldn't make the visitor think their message never arrived.
  try {
    const confirmation = visitorConfirmationFor({ language })
    await resend.emails.send({
      from: 'Ahoura Azarbin <contact@mail.ahouraazarbin.com>',
      to: email,
      subject: confirmation.subject,
      text: confirmation.text,
    })
  } catch (error) {
    console.error('contact: failed to send visitor confirmation', error)
  }

  res.status(200).json({ ok: true })
}
