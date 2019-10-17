// custom declarations for setup-polly-jest

declare module 'setup-polly-jest' {
  import { Polly, PollyConfig } from '@pollyjs/core'
  export function setupPolly(config: PollyConfig): { polly: Polly }
}
