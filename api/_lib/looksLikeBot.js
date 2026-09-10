const MIN_FILL_MS = 3000

export function looksLikeBot(fields, now = Date.now()) {
  if (fields.honeypot) return true

  const renderedAt = Number(fields.renderedAt)
  if (!Number.isFinite(renderedAt)) return true

  return now - renderedAt < MIN_FILL_MS
}
