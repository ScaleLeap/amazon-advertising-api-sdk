import {
  CompleteMediaParam,
  CreateUploadLocaltionParam,
  MediaId,
  SponsoredBrandsMediaOperation,
} from '../../../src'
import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'

jest.setTimeout(15000)

describe('SponsoredBrandsMediaOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsMediaOperation)

  /**
   * TODO: Need check on Production API again. Sandbox API return an error:
   * ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v1/media/upload
   */
  describe.skip('createUploadLocation', () => {
    it(`should retrieve a upload location`, async () => {
      const param: CreateUploadLocaltionParam = {
        programType: 'SponsoredBrands',
        creativeType: 'Video',
      }
      const res = await operation.createUploadLocation(param)

      expect(res).toBeDefined()
    })
  })

  /**
   * TODO: Need check on Production API again. Sandbox API return an error:
   * ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v1/media/complete
   */
  describe.skip('completeMedia', () => {
    it(`should retrieve media id`, async () => {
      const param: CompleteMediaParam = {
        uploadLocation: 'string',
        version: 'string',
      }
      const res = await operation.completeMedia(param)

      expect(res).toBeDefined()
    })
  })

  /**
   * TODO: Need check on Production API again. Sandbox API return an error:
   * ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v2/media/describe?mediaId=ABC
   */
  describe.skip('describeMedia', () => {
    it(`should retrieve media resource by media id`, async () => {
      const mediaId: MediaId = 'ABC'
      const res = await operation.describeMedia(mediaId)

      expect(res.mediaId).toBe(mediaId)
    })

    it(`should retrieve meta data when media status is failed `, async () => {
      expect.assertions(2)

      const mediaId: MediaId = 'ABC'
      const res = await operation.describeMedia(mediaId)

      expect(res.mediaId).toBe(mediaId)
      if (res.status === 'Failed') {
        expect(res).toHaveProperty('statusMetadata')
      }
    })

    it(`should retrieve published media url when media status is available `, async () => {
      expect.assertions(2)

      const mediaId: MediaId = 'ABC'
      const res = await operation.describeMedia(mediaId)

      expect(res.mediaId).toBe(mediaId)
      if (res.status === 'Available') {
        expect(res).toHaveProperty('publishedMediaUrl')
      }
    })
  })
})
