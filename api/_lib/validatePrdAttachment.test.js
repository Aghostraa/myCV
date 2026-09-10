import { describe, it, expect } from 'vitest'
import { validatePrdAttachment, MAX_BYTES } from './validatePrdAttachment.js'

const PDF_HEADER = Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n', 'binary')

describe('validatePrdAttachment', () => {
  it('accepts a real PDF', () => {
    const result = validatePrdAttachment({ filename: 'my-prd.pdf', buffer: PDF_HEADER })
    expect(result.ok).toBe(true)
  })

  it('accepts a real markdown file', () => {
    const buffer = Buffer.from('# PRD\n\nSome plain text content.', 'utf8')
    const result = validatePrdAttachment({ filename: 'my-prd.md', buffer })
    expect(result.ok).toBe(true)
  })

  it('rejects a file with a .pdf extension whose content is not actually a PDF', () => {
    const buffer = Buffer.from('#!/bin/sh\necho pwned', 'utf8')
    const result = validatePrdAttachment({ filename: 'fake.pdf', buffer })
    expect(result.ok).toBe(false)
    expect(result.reason).toBe('invalid-type')
  })

  it('rejects a file over the size limit', () => {
    const buffer = Buffer.concat([PDF_HEADER, Buffer.alloc(MAX_BYTES)])
    const result = validatePrdAttachment({ filename: 'huge.pdf', buffer })
    expect(result.ok).toBe(false)
    expect(result.reason).toBe('too-large')
  })

  it('rejects a disallowed extension outright', () => {
    const buffer = Buffer.from('MZ\x90\x00', 'binary')
    const result = validatePrdAttachment({ filename: 'malware.exe', buffer })
    expect(result.ok).toBe(false)
    expect(result.reason).toBe('invalid-type')
  })

  it('rejects markdown content containing binary/control bytes', () => {
    const buffer = Buffer.from([0x23, 0x00, 0x01, 0x02, 0xff])
    const result = validatePrdAttachment({ filename: 'binary.md', buffer })
    expect(result.ok).toBe(false)
    expect(result.reason).toBe('invalid-type')
  })

  it('rebuilds a safe filename that strips path traversal attempts', () => {
    const buffer = Buffer.from('plain text', 'utf8')
    const result = validatePrdAttachment({ filename: '../../../etc/passwd.md', buffer })
    expect(result.ok).toBe(true)
    expect(result.safeFilename).not.toMatch(/[/\\]/)
    expect(result.safeFilename).not.toContain('..')
  })

  it('rebuilds a safe filename that drops null bytes and control characters', () => {
    const buffer = PDF_HEADER
    const result = validatePrdAttachment({ filename: 'evil\x00name\n.pdf', buffer })
    expect(result.ok).toBe(true)
    expect(result.safeFilename).not.toMatch(/[\x00-\x1f]/)
  })
})
