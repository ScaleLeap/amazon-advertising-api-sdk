import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsAdGroupOperation } from '../../../src/operations/adGroups/sb-ad-group-operation'
import { httpClientFactory } from '../../http-client-factory'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { AdGroupStateEnum } from '../../../src/operations/adGroups/types'

describe('SponsoredBrandsAdGroupOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const adGroupOperation = operationProvider.create(SponsoredBrandsAdGroupOperation)
  const CAMPAIGN_ID = 31299234922913
  const ARCHIVED_AD_GROUP_ID = 138818764235694

  // Skip: SB Ad Group list is empty
  describe.skip('getAdGroup', () => {
    it(`should return a single adgroup ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await adGroupOperation.getAdGroup(ARCHIVED_AD_GROUP_ID)

      expect(res.adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res).toHaveProperty('name')
      expect(res).toHaveProperty('campaignId')
      expect(res).toHaveProperty('defaultBid')
      expect(res.defaultBid).toBeGreaterThan(0.02)
      expect(res.state).toBe(AdGroupStateEnum.ARCHIVED)
    })
  })

  describe('listAdGroups', () => {
    it('should return a list of ad groups', async () => {
      const res = await adGroupOperation.listAdGroups()

      expect(Array.isArray(res)).toBeTruthy()
    })

    // Skip: SB Ad Group list is empty
    it.skip('should accept params', async () => {
      const res = await adGroupOperation.listAdGroups({
        adGroupIdFilter: [ARCHIVED_AD_GROUP_ID],
        campaignIdFilter: [CAMPAIGN_ID],
        count: 1,
        stateFilter: [AdGroupStateEnum.ARCHIVED],
      })

      expect(res).toHaveLength(1)
      expect(res[0].adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
    })
  })
})
