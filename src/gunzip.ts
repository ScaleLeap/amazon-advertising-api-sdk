import { gunzip } from 'zlib'

export default (buffer: Buffer): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    return gunzip(buffer, (err, uncompressed) => {
      if (err) {
        return reject(err)
      }
      return resolve(uncompressed)
    })
  })
}
