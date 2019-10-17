import setupPolly from './polly'
import { HttpClient } from '../src/http-client'
import {
  UnauthorizedError,
  NullError,
  ResourceNotFoundError,
  InvalidProgramStateError,
} from '../src/errors'

import { httpClientFactory } from './http-client-factory'

describe('HttpClient', () => {
  setupPolly()

  let client: HttpClient
  beforeEach(() => {
    client = httpClientFactory()
  })

  describe('get', () => {
    it('should return a result', async () => {
      const res = await client.get('v2/profiles')
      expect(Array.isArray(res)).toBeTruthy()
    })

    it.skip('should throw a known error object when encountering an error', () => {
      return expect(client.get('profiles')).rejects.toThrow(UnauthorizedError)
    })

    it.skip('should throw NullError when response body is null', () => {
      return expect(client.get('profiles')).rejects.toThrow(NullError)
    })

    it('should throw a ResourceNotFoundError when resource is not found', () => {
      return expect(client.get('foobar')).rejects.toThrow(ResourceNotFoundError)
    })
  })

  describe.skip('download', () => {
    it('should throw if location header not set', async () => {
      const promise = client.download('profiles')
      return expect(promise).rejects.toThrowError(InvalidProgramStateError)
    })
  })

  describe.skip('BIDDING_CONTROLS_ON header', () => {
    // it('should set the header in sandbox environment', async done => {
    //   expect.assertions(1)
    //   const scope = nock('https://advertising-api-test.amazon.com')
    //     .get('/v2/profiles')
    //     .reply(200, {})
    //   scope.once('request', req => {
    //     expect(req.headers.bidding_controls_on).toEqual(['true'])
    //     done()
    //   })
    //   await client.get('profiles')
    // })
  })
})
