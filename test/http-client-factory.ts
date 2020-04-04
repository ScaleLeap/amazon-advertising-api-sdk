import { HttpClient, HttpClientAuth } from '../src/http-client'
import { config } from './config'

const SANDBOX = true
export const SANDBOX_URI = 'https://advertising-api-test.amazon.com'

export const auth: HttpClientAuth = {
  accessToken: config.TEST_ACCESS_TOKEN || '',
  clientId: config.TEST_CLIENT_ID || '',
  scope: config.TEST_SCOPE || -1,
}

export function httpClientFactory(): HttpClient {
  return new HttpClient(SANDBOX_URI, auth, SANDBOX)
}
