import { OperationProvider } from '../../../src/operations/operation-provider'
import { SANDBOX_URI, auth } from '../../http-client-factory'
import { SponsoredDisplaySuggestedProductsOperation } from '../../../src/operations/suggested-products/sponsored-display-suggested-products-operation'
import { HttpClient, ListSuggestedProductsParams, ProductReadinessRequest } from '../../../src'

describe('SponsoredDisplaySuggestedProductsOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplaySuggestedProductsOperation)

  describe('listSuggestedProducts', () => {
    /**
     * Sandbox API returns empty response. Need check again on Production API.
     */
    it(`should retrieve a list of products filtered by tactic`, async () => {
      const params: ListSuggestedProductsParams = {
        tacticFilter: 'remarketing',
      }
      const res = await operation.listSuggestedProducts(params)

      expect(Array.isArray(res)).toBeTruthy()
    })

    /**
     * Sandbox API return error: "Unrecognized readiness status: LOW"
     * Need check again on Production API.
     */
    it.skip(`should retrieve a list of products filtered by tactic and readiness status`, async () => {
      const readinessStatus = 'LOW'
      const params: ListSuggestedProductsParams = {
        tacticFilter: 'T00010',
        readinessFilter: readinessStatus,
      }
      const [res] = await operation.listSuggestedProducts(params)

      expect(res.readinessStatus).toBe(readinessStatus)
    })
  })

  describe('getProductReadiness', () => {
    it(`should retrieve the readiness status for a specified list`, async () => {
      const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']

      const params: ProductReadinessRequest = {
        asins: ASINS,
        tactic: 'remarketing',
      }
      const [res] = await operation.getProductReadiness(params)

      expect(ASINS).toContain(res.asin)
    })
  })
})
