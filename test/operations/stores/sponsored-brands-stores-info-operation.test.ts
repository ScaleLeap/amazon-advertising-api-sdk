import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import { SponsoredBrandsStoresInfoOperation } from '../../../src/operations/stores/sponsored-brands-stores-info-operation'

jest.setTimeout(15000)

describe('SponsoredBrandsStoresInfoOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsStoresInfoOperation)

  describe('listStores', () => {
    it(`should retrieves a list of stores for a given advertiser`, async () => {
      const res = await operation.listStores()

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
