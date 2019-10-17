import path from 'path'
import { Polly, PollyServer } from '@pollyjs/core'
import NodeHttpAdapter from '@pollyjs/adapter-node-http'
import FSPersister from '@pollyjs/persister-fs'
import { config } from '../config'

Polly.register(FSPersister)
Polly.register(NodeHttpAdapter)

export class PollyJS {
  recordingName: string
  polly: Polly

  constructor(recordingName: string) {
    this.recordingName = recordingName
    this.polly = new Polly(this.recordingName, {
      mode: config.POLLY_MODE,
      adapters: ['node-http'],
      persister: 'fs',
      persisterOptions: {
        fs: {
          recordingsDir: path.resolve(__dirname, '../__recordings__'),
        },
      },
    })
  }

  getPollyInstance(): Polly {
    return this.polly
  }

  getPollyServer(): PollyServer {
    return this.polly.server
  }
}
