import { OperationProvider } from '../../../src/operations/operation-provider'
import { SANDBOX_URI, auth } from '../../http-client-factory'
import { SponsoredDisplaySuggestedProductsOperation } from '../../../src/operations/suggested-products/sponsored-display-suggested-products-operation'
import { HttpClient, ListSuggestedProductsParams } from '../../../src'

describe('SponsoredDisplaySuggestedProductsOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplaySuggestedProductsOperation)

  describe('listSuggestedProducts', () => {
    it(`should retrieve a list of products filtered by tactic`, async () => {
      const params: ListSuggestedProductsParams = {
        tacticFilter: 'T00010',
      }
      const res = await operation.listSuggestedProducts(params)

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of products filtered by tactic and readiness status`, async () => {
      const readinessStatus = 'HIGH'
      const params: ListSuggestedProductsParams = {
        tacticFilter: 'remarketing',
        readinessFilter: readinessStatus,
      }
      const [res] = await operation.listSuggestedProducts(params)

      expect(res.readinessStatus).toBe(readinessStatus)
    })
  })
})
