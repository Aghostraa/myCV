const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Strips control characters (CR/LF included, which is what makes header injection possible). */
export function sanitizeField(value, maxLength = 2000) {
  // eslint-disable-next-line no-control-regex
  const cleaned = String(value).replace(/[\x00-\x1f\x7f]/g, '').trim()
  return cleaned.slice(0, maxLength)
}

export function isValidEmail(value) {
  return emailPattern.test(value)
}
