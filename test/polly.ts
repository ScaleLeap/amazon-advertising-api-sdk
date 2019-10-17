import path from 'path'
import { setupPolly } from 'setup-polly-jest'
import { Polly, PollyConfig } from '@pollyjs/core'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'
import { config } from './config'

Polly.register(FSPersister)
Polly.register(NodeHttpAdapter)

export default function(pollyConfig: PollyConfig = {}) {
  const context = setupPolly({
    adapters: ['node-http'],
    mode: config.POLLY_MODE,
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '__recordings__'),
      },
    },
    recordIfMissing: true,
    recordFailedRequests: true,

    // overwrite default config
    ...pollyConfig,
  })

  beforeEach(() => {
    // removes secrets from stored recordings
    context.polly.server.any().on('beforeResponse', req => {
      req.removeHeader('authorization')
      req.removeHeader('amazon-advertising-api-clientid')
    })
  })

  return context
}
