import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { OAuthClient } from '../src/o-auth-client'
import { config } from './config'

/**
 * Refresh an access token.
 *
 * Usage:
 *
 * By default, will read and write to `.env` in your current working directory.
 *
 * $> npm run dev:refresh-token
 *
 * But you can also specify a file manually to read & write:
 *
 * $> npm run dev:refresh-token .env.dev
 *
 * You can also write to STDOUT:
 *
 * $> npm run dev:refresh-token -
 */

const DOTENV_PATH = join(__dirname, '../.env')
const OUTPUT = process.argv[2] || DOTENV_PATH

function isOutputStdout(output: string) {
  return output && output === '-'
}

if (!isOutputStdout(OUTPUT) && !existsSync(OUTPUT)) {
  throw new Error(`The "${OUTPUT}" file does not exist.`)
}

const client = new OAuthClient(
  {
    clientId: config.TEST_CLIENT_ID,
    clientSecret: config.TEST_CLIENT_SECRET,
  },
  amazonMarketplaces.US,
)

if (!config.TEST_ACCESS_TOKEN) {
  throw new Error('Missing `TEST_ACCESS_TOKEN` environment variable.')
}

if (!config.TEST_REFRESH_TOKEN) {
  throw new Error('Missing `TEST_REFRESH_TOKEN` environment variable.')
}

client
  .createToken(config.TEST_ACCESS_TOKEN, config.TEST_REFRESH_TOKEN)
  .refresh()
  .then((tokens) => {
    if (isOutputStdout(OUTPUT)) {
      process.stdout.write(tokens.accessToken)
    } else {
      const dotenv = readFileSync(OUTPUT, { encoding: 'utf8' })

      const res = dotenv.replace(
        /TEST_ACCESS_TOKEN=(.+?)\n/,
        `TEST_ACCESS_TOKEN=${tokens.accessToken}\n`,
      )
      writeFileSync(OUTPUT, res, { encoding: 'utf8' })
    }
  })
  .catch((err) => console.error(err))
