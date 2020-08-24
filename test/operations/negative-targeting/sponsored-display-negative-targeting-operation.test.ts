import { OperationProvider, HttpClient } from '../../../src'
import { SponsoredDisplayNegativeTargetingOperation } from '../../../src/operations/negative-targeting/sponsored-display-negative-targeting-operation'
import { SANDBOX_URI, auth } from '../../http-client-factory'
import { CreateSponsoredDisplayNegativeTargetingClausesParams } from '../../../src/operations/negative-targeting/types'

describe('SponsoredDisplayNegativeTargetingOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayNegativeTargetingOperation)
  const AD_GROUP_ID = 257081908560802
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']

  describe('createNegativeTargetingClauses', () => {
    it(`should create one or more negative targeting clauses`, async () => {
      const params: CreateSponsoredDisplayNegativeTargetingClausesParams[] = [
        {
          adGroupId: AD_GROUP_ID,
          state: 'enabled',
          expression: [
            {
              type: 'asinSameAs',
              value: ASINS[0],
            },
          ],
          expressionType: 'manual',
        },
      ]
      const [res] = await operation.createNegativeTargetingClauses(params)

      expect(res.code).toBe('SUCCESS')
    })
  })
})
