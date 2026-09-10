export const MAX_BYTES = 8 * 1024 * 1024

const ALLOWED_EXTENSIONS = new Set(['pdf', 'md'])

function extensionOf(filename) {
  const match = /\.([a-zA-Z0-9]+)$/.exec(filename || '')
  return match ? match[1].toLowerCase() : ''
}

function isPdf(buffer) {
  return buffer.length >= 5 && buffer.subarray(0, 5).toString('binary') === '%PDF-'
}

/**
 * A .md upload is only ever plain text to us — never parsed, never rendered.
 * "Valid markdown" here just means "valid UTF-8 text with no binary/control
 * bytes", which is enough to rule out a renamed binary.
 */
function isPlainText(buffer) {
  const text = buffer.toString('utf8')
  if (Buffer.byteLength(text, 'utf8') !== buffer.length) return false
  for (let i = 0; i < buffer.length; i++) {
    const byte = buffer[i]
    const isAllowedControl = byte === 0x09 || byte === 0x0a || byte === 0x0d
    if (byte < 0x20 && !isAllowedControl) return false
  }
  return true
}

/** Rebuilds a safe name from scratch rather than trusting the client's filename. */
function safeFilenameFor(filename, extension) {
  const base = (filename || 'attachment')
    .replace(/\.[a-zA-Z0-9]+$/, '')
    .replace(/[^a-zA-Z0-9-_ ]/g, '')
    .trim()
    .slice(0, 80)
  return `${base || 'attachment'}.${extension}`
}

export function validatePrdAttachment({ filename, buffer }) {
  if (buffer.length > MAX_BYTES) {
    return { ok: false, reason: 'too-large' }
  }

  const extension = extensionOf(filename)
  if (!ALLOWED_EXTENSIONS.has(extension)) {
    return { ok: false, reason: 'invalid-type' }
  }

  if (extension === 'pdf' && !isPdf(buffer)) {
    return { ok: false, reason: 'invalid-type' }
  }
  if (extension === 'md' && !isPlainText(buffer)) {
    return { ok: false, reason: 'invalid-type' }
  }

  return {
    ok: true,
    safeFilename: safeFilenameFor(filename, extension),
    contentType: extension === 'pdf' ? 'application/pdf' : 'text/markdown',
  }
}
