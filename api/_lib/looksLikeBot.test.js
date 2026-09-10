import { describe, it, expect } from 'vitest'
import { looksLikeBot } from './looksLikeBot.js'

describe('looksLikeBot', () => {
  it('flags a filled honeypot field', () => {
    const now = 1_000_000
    expect(looksLikeBot({ honeypot: 'I am a bot', renderedAt: String(now - 10_000) }, now)).toBe(true)
  })

  it('flags a submission faster than the minimum fill time', () => {
    const now = 1_000_000
    expect(looksLikeBot({ honeypot: '', renderedAt: String(now - 500) }, now)).toBe(true)
  })

  it('flags a missing or invalid renderedAt as suspicious', () => {
    const now = 1_000_000
    expect(looksLikeBot({ honeypot: '' }, now)).toBe(true)
    expect(looksLikeBot({ honeypot: '', renderedAt: 'not-a-number' }, now)).toBe(true)
  })

  it('allows a normal human-paced submission through', () => {
    const now = 1_000_000
    expect(looksLikeBot({ honeypot: '', renderedAt: String(now - 10_000) }, now)).toBe(false)
  })
})
