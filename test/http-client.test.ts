import HttpStatus from 'http-status-codes'
import setupPolly from './polly'
import { HttpClient } from '../src/http-client'
import {
  NullError,
  ResourceNotFoundError,
  InvalidProgramStateError,
  GenericError,
} from '../src/errors'

import { httpClientFactory, SANDBOX_URI } from './http-client-factory'

const context = setupPolly()

describe('HttpClient', () => {
  let client: HttpClient
  beforeEach(() => {
    client = httpClientFactory()
  })

  describe('get', () => {
    it('should return a result', async () => {
      const res = await client.get('v2/profiles')
      expect(Array.isArray(res)).toBeTruthy()
    })

    it('should throw a known error object when encountering an error', () => {
      const server = context.polly.server

      server.get(SANDBOX_URI + '/encountering-an-error').on('beforeResponse', (req, res) => {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR)
        res.send('')
      })

      return expect(client.get('encountering-an-error')).rejects.toBeInstanceOf(GenericError)
    })

    it('should throw NullError when response body is null', () => {
      const server = context.polly.server

      server.get(SANDBOX_URI + '/null-body').on('beforeResponse', (req, res) => {
        res.status(HttpStatus.OK)
        res.send('')
      })

      return expect(client.get('null-body')).rejects.toThrow(NullError)
    })

    it('should throw a ResourceNotFoundError when resource is not found', () => {
      const server = context.polly.server

      server.get(SANDBOX_URI + '/foobar').on('beforeResponse', (req, res) => {
        res.status(HttpStatus.NOT_FOUND)
        res.send({
          code: 'NOT_FOUND',
          details:
            'Could not find resource for full path: https://advertising-api-test.amazon.com/foobar',
        })
      })

      return expect(client.get('foobar')).rejects.toThrow(ResourceNotFoundError)
    })
  })

  describe('download', () => {
    it('should throw if location header not set', async () => {
      const server = context.polly.server

      server.get(SANDBOX_URI + '/profiles').on('beforeResponse', (req, res) => {
        res.setHeader('Location', '')
        res.status(HttpStatus.OK)
        res.send({
          snapshotId: 'amzn1.clicksAPI.v1.p1.5C8B19EB.7298de0e-17cd-441f-bf5c-17a27406b0d6',
          status: 'SUCCESS',
          statusDetails: 'Snapshot has been successfully generated.',
          location: '',
          fileSize: 518,
        })
      })

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
