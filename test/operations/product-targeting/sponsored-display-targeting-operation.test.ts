import { SANDBOX_URI, auth } from '../../http-client-factory'
import { OperationProvider, HttpClient } from '../../../src'
import { SponsoredDisplayTargetingOperation } from '../../../src/operations/product-targeting/sponsored-display-targeting-operation'
import { CreateSponsoredDisplayTargetingClausesParams } from '../../../src/operations/product-targeting/types'

describe('SponsoredDisplayTargetingOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayTargetingOperation)
  const AD_GROUP_ID = 257081908560802
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']

  /**
   * Sandbox API returns "HTTP 403 Forbidden" error when request.
   * TODO: Need check again on Production API.
   */
  describe('createTargetingClauses', () => {
    it(`should create one or more targeting expressions with similarProduct type`, async () => {
      const params: CreateSponsoredDisplayTargetingClausesParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          state: 'paused',
          expressionType: 'manual',
          expression: [
            {
              type: 'asinSameAs',
              value: ASINS[0],
            },
          ],
          bid: 10,
        },
      ]
      const [res] = await operation.createTargetingClauses(params)

      expect(res.code).toBe('SUCCESS')
    })

    it(`should create one or more targeting expressions with exactProduct type`, async () => {
      const params: CreateSponsoredDisplayTargetingClausesParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          expressionType: 'manual',
          expression: [
            {
              type: 'exactProduct',
              value: ASINS[0],
            },
          ],
          bid: 10,
        },
      ]
      const [res] = await operation.createTargetingClauses(params)

      expect(res.code).toBe('SUCCESS')
    })

    it(`should create one or more targeting expressions with lookback type`, async () => {
      const params: CreateSponsoredDisplayTargetingClausesParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          expressionType: 'manual',
          expression: [
            {
              type: 'lookback',
              value: ASINS[0],
            },
          ],
          bid: 10,
        },
      ]
      const [res] = await operation.createTargetingClauses(params)

      expect(res.code).toBe('SUCCESS')
    })

    it(`should create one or more targeting expressions with negative type`, async () => {
      const params: CreateSponsoredDisplayTargetingClausesParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          expressionType: 'manual',
          expression: [
            {
              type: 'negative',
              value: ASINS[0],
            },
          ],
          bid: 10,
        },
      ]
      const [res] = await operation.createTargetingClauses(params)

      expect(res.code).toBe('SUCCESS')
    })
  })
})
