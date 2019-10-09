import fetch from 'cross-fetch'
import { PollyJS } from './polly'

const pollyJs = new PollyJS('Polly Test')
const server = pollyJs.getPollyServer()
const polly = pollyJs.getPollyInstance()

server
  .post('https://reqres.in/api/register')
  .on('beforeResponse', (req, res) => {
    req.send({
      email: 'test@example.com',
      password: '123456',
    })
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
