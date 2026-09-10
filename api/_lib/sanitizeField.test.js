import { describe, it, expect } from 'vitest'
import { sanitizeField, isValidEmail } from './sanitizeField.js'

describe('sanitizeField', () => {
  it('trims surrounding whitespace', () => {
    expect(sanitizeField('  hello  ')).toBe('hello')
  })

  it('strips CR and LF so a value cannot inject extra header lines', () => {
    expect(sanitizeField('Ada\r\nBcc: attacker@evil.com')).toBe('AdaBcc: attacker@evil.com')
  })

  it('strips other control characters', () => {
    expect(sanitizeField('Ada\x00\x07Lovelace')).toBe('AdaLovelace')
  })

  it('caps length at the given max', () => {
    expect(sanitizeField('a'.repeat(500), 10)).toBe('a'.repeat(10))
  })
})

describe('isValidEmail', () => {
  it('accepts a normal address', () => {
    expect(isValidEmail('ada@example.com')).toBe(true)
  })

  it('rejects a value with no @', () => {
    expect(isValidEmail('not-an-email')).toBe(false)
  })

  it('rejects a value containing a newline', () => {
    expect(isValidEmail('ada@example.com\nBcc: attacker@evil.com')).toBe(false)
  })
})
