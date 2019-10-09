import fetch from 'cross-fetch'
import { PollyJS } from './polly'

const pollyJs = new PollyJS('Polly Test')
const server = pollyJs.getPollyServer()
const polly = pollyJs.getPollyInstance()

server
  .post('https://reqres.in/api/register')
  .on('beforeResponse', (req, res) => {
    res.send({
      token: 'yyy',
      id: 1,
    })
  })
  .on('beforePersist', (req, recording) => {
    const response = JSON.parse(recording.response.content.text)
    response.token = 'xxx'
    recording.response.content.text = response
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
    const response = await fetch('https://reqres.in/api/register', {
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

    expect(response.id).toEqual(1)
    expect(response.token).toEqual('yyy')

    await polly.stop()
  })
})
