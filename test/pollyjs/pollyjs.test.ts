import fetch from 'cross-fetch'
import setupPolly from './setup-polly'

setupPolly()
describe('httpstat.us/200', () => {
  it('should return 200 OK', async () => {
    const response = await fetch('https://httpstat.us/200').then(response => {
      return response.text()
    })

    expect(response).toEqual('200 OK')
  })
})
