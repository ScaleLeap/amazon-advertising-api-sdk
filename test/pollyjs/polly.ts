import path from 'path'
import { Polly, PollyServer } from '@pollyjs/core'
import { setupPolly } from 'setup-polly-jest'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'

Polly.register(FSPersister)
Polly.register(NodeHttpAdapter)

export class PollyJS {
  recordingName: string

  constructor(recordingName: string) {
    this.recordingName = recordingName
  }

  getPollyServer(): PollyServer {
    const polly = new Polly(this.recordingName)
    const { server } = polly
    return server
  }

  setup(): void {
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
}
