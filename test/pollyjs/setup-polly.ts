import path from 'path'
import { Polly } from '@pollyjs/core'
import { setupPolly } from 'setup-polly-jest'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'

Polly.register(FSPersister)
Polly.register(NodeHttpAdapter)

export default function setup(): void {
  setupPolly({
    adapters: ['node-http'],
    persister: 'fs',
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, '../__recordings__'),
      },
    },
  })
}
