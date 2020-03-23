/* eslint-disable @typescript-eslint/no-var-requires */
const { jestPollyConfigService, jestPollyContext } = require('@scaleleap/jest-polly')
const { resolve } = require('path')

beforeAll(() => {
  jestPollyConfigService.config = {
    persisterOptions: {
      fs: {
        recordingsDir: resolve(__dirname, '__recordings__'),
      },
    },
    matchRequestsBy: {
      headers: false,
    },
  }
})

beforeEach(() => {
  // removes secrets from stored recordings
  jestPollyContext.polly.server.any().on('beforePersist', (req, rec) => {
    const headers = [
      'authorization',
      'amazon-advertising-api-clientid',
      'x-amzn-requestid',
      'x-amz-date',
      'x-amz-rid',
    ]

    rec.request.headers = rec.request.headers.filter((h) => !headers.includes(h.name))
    rec.response.headers = rec.response.headers.filter((h) => !headers.includes(h.name))
  })
})
