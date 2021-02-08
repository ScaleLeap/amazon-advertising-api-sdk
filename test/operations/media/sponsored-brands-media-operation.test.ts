import { CreateUploadLocaltionParams, SponsoredBrandsMediaOperation } from '../../../src'
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
      const param: CreateUploadLocaltionParams = {
        programType: 'SponsoredBrands',
        creativeType: 'Video',
      }
      const res = await operation.createUploadLocation(param)

      expect(res).toBeDefined()
    })
  })
})
