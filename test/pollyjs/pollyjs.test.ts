import fetch from 'cross-fetch'
import { PollyJS } from './polly'

const pollyJs = new PollyJS('__recordings__')
const server = pollyJs.getPollyServer()
pollyJs.setup()

server.any().on('request', (req, res) => {
  req.headers['X-Auth-Token'] = 'abc123'
  req.query.email = 'test@netflix.com'
})

describe('httpstat.us/200', () => {
  it('should return 200 OK', async () => {
    const response = await fetch('https://httpstat.us/200').then(response => {
      return response.text()
    })

    expect(response).toEqual('200 OK')
  })
})

describe('https://reqres.in/api/register', () => {
  it('should filter token', async () => {
    await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      }),
    }).then(response => {
      return response.json()
    })
  })
})
