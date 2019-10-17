import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { OAuthClient } from '../src/o-auth-client'
import { config } from './config'

const DOTENV_PATH = join(__dirname, '../.env')

if (!existsSync(DOTENV_PATH)) {
  throw new Error('The `.env` file does not exist.')
}

const client = new OAuthClient({
  clientId: config.TEST_CLIENT_ID,
  clientSecret: config.TEST_CLIENT_SECRET,
})

if (!config.TEST_ACCESS_TOKEN) {
  throw new Error('Missing `TEST_ACCESS_TOKEN` environment variable.')
}

if (!config.TEST_REFRESH_TOKEN) {
  throw new Error('Missing `TEST_REFRESH_TOKEN` environment variable.')
}

const token = client.createToken(config.TEST_ACCESS_TOKEN, config.TEST_REFRESH_TOKEN)

const dotenv = readFileSync(DOTENV_PATH, { encoding: 'utf8' })

token
  .refresh()
  .then(tokens => {
    const res = dotenv.replace(
      /TEST_ACCESS_TOKEN=(.+?)\n/,
      `TEST_ACCESS_TOKEN=${tokens.accessToken}\n`,
    )
    writeFileSync(DOTENV_PATH, res, { encoding: 'utf8' })
  })
  .catch(err => console.error(err))
