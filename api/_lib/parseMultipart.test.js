import { describe, it, expect } from 'vitest'
import { Readable } from 'node:stream'
import { parseMultipart } from './parseMultipart.js'

const BOUNDARY = '----testboundary'

function buildMultipartRequest(parts) {
  const chunks = parts.map((part) => {
    const headerLines = [`Content-Disposition: form-data; name="${part.name}"`]
    if (part.filename) {
      headerLines[0] += `; filename="${part.filename}"`
      headerLines.push(`Content-Type: ${part.contentType || 'application/octet-stream'}`)
    }
    return `--${BOUNDARY}\r\n${headerLines.join('\r\n')}\r\n\r\n${part.value}\r\n`
  })
  const body = chunks.join('') + `--${BOUNDARY}--\r\n`
  const req = Readable.from([Buffer.from(body)])
  req.headers = { 'content-type': `multipart/form-data; boundary=${BOUNDARY}` }
  return req
}

describe('parseMultipart', () => {
  it('collects text fields and a file', async () => {
    const req = buildMultipartRequest([
      { name: 'email', value: 'ada@example.com' },
      { name: 'prd', filename: 'doc.md', contentType: 'text/markdown', value: '# hello' },
    ])

    const result = await parseMultipart(req, { maxFileBytes: 1024 })

    expect(result.fields.email).toBe('ada@example.com')
    expect(result.file.filename).toBe('doc.md')
    expect(result.file.buffer.toString('utf8')).toBe('# hello')
  })

  it('rejects when the file exceeds maxFileBytes', async () => {
    const big = 'a'.repeat(2000)
    const req = buildMultipartRequest([
      { name: 'prd', filename: 'big.md', contentType: 'text/markdown', value: big },
    ])

    await expect(parseMultipart(req, { maxFileBytes: 100 })).rejects.toMatchObject({
      code: 'FILE_TOO_LARGE',
    })
  })

  it('resolves with a null file when none was attached', async () => {
    const req = buildMultipartRequest([{ name: 'message', value: 'hi there' }])

    const result = await parseMultipart(req, { maxFileBytes: 1024 })

    expect(result.file).toBeNull()
    expect(result.fields.message).toBe('hi there')
  })
})
