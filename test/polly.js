import { jestPollyConfigService, jestPollyContext } from '@scaleleap/jest-polly'
import { resolve } from 'path'

// eslint-disable-next-line no-undef
beforeAll(() => {
  jestPollyConfigService.config = {
    persisterOptions: {
      fs: {
        // eslint-disable-next-line no-undef
        recordingsDir: resolve(__dirname, '__recordings__'),
      },
    },
    matchRequestsBy: {
      headers: false,
    },
  }
})

// eslint-disable-next-line no-undef
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
