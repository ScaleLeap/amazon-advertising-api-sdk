import { SANDBOX_URI, auth } from '../../http-client-factory'
import { OperationProvider, HttpClient } from '../../../src'
import { SponsoredDisplayTargetingOperation } from '../../../src/operations/product-targeting/sponsored-display-targeting-operation'
import { CreateSponsoredDisplayTargetingClausesParams } from '../../../src/operations/product-targeting/types'

describe('SponsoredDisplayTargetingOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayTargetingOperation)
  const AD_GROUP_ID = 164444192239500
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']

  describe.skip('createTargetingClauses', () => {
    it(`should create one or more targeting expressions`, async () => {
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
  })
})
