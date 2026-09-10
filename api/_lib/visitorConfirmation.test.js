import { describe, it, expect } from 'vitest'
import { visitorConfirmationFor } from './visitorConfirmation.js'

describe('visitorConfirmationFor', () => {
  it('returns English copy by default', () => {
    const result = visitorConfirmationFor({ language: 'en' })
    expect(result.subject).toMatch(/received/i)
    expect(result.text).toMatch(/received your request/i)
  })

  it('returns German copy when language is de', () => {
    const result = visitorConfirmationFor({ language: 'de' })
    expect(result.subject).toMatch(/erhalten/i)
    expect(result.text).toMatch(/Anfrage erhalten/i)
  })

  it('falls back to English for an unrecognized language', () => {
    const result = visitorConfirmationFor({ language: 'fr' })
    expect(result.subject).toMatch(/received/i)
  })
})
