import { gunzip } from 'zlib'

export default (buffer: Buffer): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    return gunzip(buffer, (err, uncompressed) => {
      console.log(err)
      console.log(uncompressed)
      if (err) {
        return reject(err)
      }
      return resolve(uncompressed)
    })
  })
}
