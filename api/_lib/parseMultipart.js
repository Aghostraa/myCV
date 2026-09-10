import Busboy from 'busboy'

const MAX_FIELDS = 10
const MAX_FIELD_SIZE = 5000
const MAX_FILES = 1
// Field overhead on top of the file itself (name/email/message/etc).
const MAX_TOTAL_OVERHEAD_BYTES = 64 * 1024

/**
 * Buffers the request body (bounded by maxFileBytes + a small overhead for
 * the other fields) before handing it to busboy. Piping the live req stream
 * straight into busboy proved unreliable under `vercel dev`'s local request
 * proxy (truncated multipart bodies); buffering first is both more portable
 * and lets us reject an oversized body before busboy ever sees it.
 */
export async function parseMultipart(req, { maxFileBytes }) {
  const maxTotalBytes = maxFileBytes + MAX_TOTAL_OVERHEAD_BYTES
  const chunks = []
  let total = 0
  for await (const chunk of req) {
    total += chunk.length
    if (total > maxTotalBytes) {
      const error = new Error('Request body exceeds the maximum allowed size')
      error.code = 'FILE_TOO_LARGE'
      throw error
    }
    chunks.push(chunk)
  }
  const body = Buffer.concat(chunks)

  return new Promise((resolve, reject) => {
    const busboy = Busboy({
      headers: req.headers,
      limits: {
        fields: MAX_FIELDS,
        fieldSize: MAX_FIELD_SIZE,
        files: MAX_FILES,
        fileSize: maxFileBytes,
      },
    })

    const fields = {}
    let file = null
    let fileTooLarge = false
    let settled = false

    function fail(error) {
      if (settled) return
      settled = true
      reject(error)
    }

    busboy.on('field', (name, value) => {
      fields[name] = value
    })

    busboy.on('file', (name, stream, info) => {
      const chunks = []
      stream.on('data', (chunk) => chunks.push(chunk))
      stream.on('limit', () => {
        fileTooLarge = true
      })
      stream.on('close', () => {
        if (!fileTooLarge) {
          file = { filename: info.filename, buffer: Buffer.concat(chunks) }
        }
      })
    })

    busboy.on('error', fail)

    busboy.on('finish', () => {
      if (fileTooLarge) {
        const error = new Error('File exceeds the maximum allowed size')
        error.code = 'FILE_TOO_LARGE'
        fail(error)
        return
      }
      if (settled) return
      settled = true
      resolve({ fields, file })
    })

    busboy.end(body)
  })
}
