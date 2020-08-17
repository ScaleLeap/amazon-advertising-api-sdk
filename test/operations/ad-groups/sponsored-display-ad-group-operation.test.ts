import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredDisplayAdGroupOperation } from '../../../src/operations/ad-groups/sponsored-display-ad-group-operation'
import { HttpClient } from '../../../src'
import { SANDBOX_URI, auth } from '../../http-client-factory'

describe('SponsoredDisplayAdGroupOperation', () => {
  const client = new HttpClient(SANDBOX_URI, { ...auth, scope: 2973802954634317 }, true)
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredDisplayAdGroupOperation)
  const CAMPAIGN_ID = 169989740510339
  const AD_GROUP_ID = 83691965128172
  const DEFAULT_BID = 1
  const STATE = 'paused'

  describe('getAdGroup', () => {
    it(`should return a single adgroup`, async () => {
      const res = await operation.getAdGroup(AD_GROUP_ID)

      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })
  })

  describe('getAdGroupExtended', () => {
    it('should get an extended ad group', async () => {
      const res = await operation.getAdGroupExtended(AD_GROUP_ID)

      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })
  })

  describe('createAdGroups', () => {
    it('should create an ad group', async () => {
      const [res] = await operation.createAdGroups([
        {
          name: 'test sd ad group 2020/08/16 22:22',
          state: STATE,
          defaultBid: DEFAULT_BID,
          campaignId: CAMPAIGN_ID,
        },
      ])

      expect(res.code).toBe('SUCCESS')
    })
  })

  describe('updateAdGroups', () => {
    it('should update a list of ad groups', async () => {
      const [res] = await operation.updateAdGroups([
        {
          adGroupId: AD_GROUP_ID,
          name: 'test sd ad group 2020/08/17 21:00',
          state: STATE,
          defaultBid: DEFAULT_BID,
        },
      ])

      expect(res.code).toBe('SUCCESS')
      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })
  })

  describe('listAdGroups', () => {
    it('should return a list of ad groups', async () => {
      const [res] = await operation.listAdGroups()

      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res.adGroupId).toBe(AD_GROUP_ID)
      expect(res.defaultBid).toEqual(DEFAULT_BID)
      expect(res.state).toBe(STATE)
    })

    it('should accept params', async () => {
      const [res] = await operation.listAdGroups({
        adGroupIdFilter: [AD_GROUP_ID],
        campaignIdFilter: [CAMPAIGN_ID],
        count: 1,
        stateFilter: [STATE],
      })

      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res.adGroupId).toBe(AD_GROUP_ID)
      expect(res.defaultBid).toEqual(DEFAULT_BID)
      expect(res.state).toBe(STATE)
    })
  })

  describe('listAdGroupsExtended', () => {
    it('should return a list of extended ad groups', async () => {
      const [res] = await operation.listAdGroupsExtended()

      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res.adGroupId).toBe(AD_GROUP_ID)
      expect(res.defaultBid).toEqual(DEFAULT_BID)
      expect(res.state).toBe(STATE)
    })

    it('should accept params', async () => {
      const [res] = await operation.listAdGroupsExtended({
        adGroupIdFilter: [AD_GROUP_ID],
        campaignIdFilter: [CAMPAIGN_ID],
        count: 1,
        stateFilter: [STATE],
      })

      expect(res.campaignId).toBe(CAMPAIGN_ID)
      expect(res.adGroupId).toBe(AD_GROUP_ID)
      expect(res.defaultBid).toEqual(DEFAULT_BID)
      expect(res.state).toBe(STATE)
    })
  })

  describe('archiveAdGroup', () => {
    it('should archive the ad group', async () => {
      const res = await operation.archiveAdGroup(AD_GROUP_ID)

      expect(res.code).toBe('SUCCESS')
      expect(res.adGroupId).toBe(AD_GROUP_ID)
    })
  })
})
