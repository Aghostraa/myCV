import { describe, it, expect } from 'vitest'
import { validateReason, ownerSubjectFor } from './contactReason.js'

describe('validateReason', () => {
  it('accepts a known reason with no custom text needed', () => {
    const result = validateReason({ reason: 'project', customReason: '' })
    expect(result.ok).toBe(true)
  })

  it('rejects an unknown reason key', () => {
    const result = validateReason({ reason: 'not-a-real-reason', customReason: '' })
    expect(result.ok).toBe(false)
  })

  it('requires customReason when reason is "other"', () => {
    const result = validateReason({ reason: 'other', customReason: '' })
    expect(result.ok).toBe(false)
  })

  it('accepts "other" once customReason is provided', () => {
    const result = validateReason({ reason: 'other', customReason: 'Speaking engagement' })
    expect(result.ok).toBe(true)
  })
})

describe('ownerSubjectFor', () => {
  it('builds a subject from the reason label and the sender name', () => {
    const subject = ownerSubjectFor({ reason: 'hiring', customReason: '', name: 'Ada' })
    expect(subject).toBe('Hiring / job opportunity — from Ada')
  })

  it('builds a subject from the custom text when reason is "other"', () => {
    const subject = ownerSubjectFor({ reason: 'other', customReason: 'Speaking engagement', name: 'Ada' })
    expect(subject).toBe('Speaking engagement — from Ada')
  })
})
