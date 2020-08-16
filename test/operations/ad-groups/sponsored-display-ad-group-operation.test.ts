import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredDisplayAdGroupOperation } from '../../../src/operations/ad-groups/sponsored-display-ad-group-operation'
import { HttpClient } from '../../../src'
import { SANDBOX_URI, auth } from '../../http-client-factory'

describe('SponsoredDisplayAdGroupOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayAdGroupOperation)
  const CAMPAIGN_ID = 169989740510339

  describe('createAdGroups', () => {
    it('should create an ad group', async () => {
      const [res] = await operation.createAdGroups([
        {
          name: 'test sd ad group 2020/08/16 22:22',
          state: 'paused',
          defaultBid: 1,
          campaignId: CAMPAIGN_ID,
        },
      ])

      expect(res.code).toBe('SUCCESS')
    })
  })
})
