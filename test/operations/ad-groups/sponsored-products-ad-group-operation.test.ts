import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsAdGroupOperation } from '../../../src/operations/ad-groups/sponsored-products-ad-group-operation'
import { httpClientFactory } from '../../http-client-factory'
import {
  AdGroupState,
  AdGroupResponseStatus,
  AdGroupServingStatusEnum,
} from '../../../src/operations/ad-groups/types'

describe('SponsoredProductsAdGroupOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const adGroupOperation = operationProvider.create(SponsoredProductsAdGroupOperation)
  const CAMPAIGN_ID = 31299234922913
  const ARCHIVED_AD_GROUP_ID = 138818764235694
  const ENABLED_AD_GROUP_ID = 164621261612363

  describe('getAdGroup', () => {
    it(`should return a single adgroup`, async () => {
      const res = await adGroupOperation.getAdGroup(ARCHIVED_AD_GROUP_ID)

      expect(res.adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res).toHaveProperty('name')
      expect(res).toHaveProperty('campaignId')
      expect(res).toHaveProperty('defaultBid')
      expect(res.defaultBid).toBeGreaterThan(0.02)
      expect(res.state).toBe<AdGroupState>('archived')
    })
  })

  describe('getAdGroupEx', () => {
    it('should get an extended ad group', async () => {
      const res = await adGroupOperation.getAdGroupEx(ARCHIVED_AD_GROUP_ID)

      expect(res.adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res).toHaveProperty('name')
      expect(res).toHaveProperty('campaignId')
      expect(res).toHaveProperty('defaultBid')
      expect(res.defaultBid).toBeGreaterThan(0.02)
      expect(res.state).toBe<AdGroupState>('archived')

      expect(res).toHaveProperty('creationDate')
      expect(res).toHaveProperty('lastUpdatedDate')
      expect(res.servingStatus).toBe(AdGroupServingStatusEnum.PORTFOLIO_ENDED)
    })
  })

  describe.skip('createAdGroups', () => {
    it('should create an ad group', async () => {
      const res = await adGroupOperation.createAdGroups([
        {
          name: 'Foo Ad Group',
          state: 'paused',
          defaultBid: 1,
          campaignId: CAMPAIGN_ID,
        },
      ])

      expect(res).toHaveLength(1)
      expect(res[0].code).toBe('SUCCESS')
      expect(res[0]).toHaveProperty('adGroupId')
    })
  })

  describe('updateAdGroups', () => {
    it('should update an ad group', async () => {
      const res = await adGroupOperation.updateAdGroups([
        {
          adGroupId: ENABLED_AD_GROUP_ID,
          name: 'New Name',
          state: 'enabled',
          defaultBid: 1,
        },
      ])

      expect(res).toHaveLength(1)
      expect(res[0].code).toBe('SUCCESS')
      expect(res[0]).toHaveProperty('adGroupId')
    })
  })

  describe('archiveAdGroup', () => {
    it('should archive the ad group', async () => {
      expect.assertions(2)

      const res = await adGroupOperation.archiveAdGroup(ARCHIVED_AD_GROUP_ID)
      expect(res.code).toBe<AdGroupResponseStatus>('SUCCESS')

      if (res.code === 'SUCCESS') {
        expect(res.adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      }
    })
  })

  describe('listAdGroups', () => {
    it('should return a list of ad groups', async () => {
      const res = await adGroupOperation.listAdGroups()

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
      expect(res[0]).toHaveProperty('name')
      expect(res[0]).toHaveProperty('defaultBid')
      expect(res[0].defaultBid).toBeGreaterThan(0.02)
      expect(res[0].state).toBe<AdGroupState>('archived')
    })

    it('should accept params', async () => {
      const res = await adGroupOperation.listAdGroups({
        adGroupIdFilter: [ARCHIVED_AD_GROUP_ID],
        campaignIdFilter: [CAMPAIGN_ID],
        count: 1,
        stateFilter: ['archived'],
      })

      expect(res).toHaveLength(1)
      expect(res[0].adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
    })
  })

  describe('listAdGroupsEx', () => {
    it('should return an extended list of ad groups', async () => {
      const res = await adGroupOperation.listAdGroupsEx()

      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].adGroupId).toBe(ARCHIVED_AD_GROUP_ID)
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
      expect(res[0]).toHaveProperty('name')
      expect(res[0]).toHaveProperty('defaultBid')
      expect(res[0].defaultBid).toBeGreaterThan(0.02)

      expect(res[0]).toHaveProperty('creationDate')
      expect(res[0]).toHaveProperty('lastUpdatedDate')
      expect(res[0].servingStatus).toBe(AdGroupServingStatusEnum.PORTFOLIO_ENDED)
    })
  })
})
