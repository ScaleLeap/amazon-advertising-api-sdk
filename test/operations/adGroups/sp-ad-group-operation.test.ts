import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredProductsAdGroupOperation } from '../../../src/operations/adGroups/sp-ad-group-operation'
import { httpClientFactory } from '../../http-client-factory'
import setupPolly from '../../polly'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import {
  AdGroupStateEnum,
  AdGroupServingStatusEnum,
  AdGroupResponseStatusEnum,
} from '../../../src/operations/adGroups/types'

setupPolly()

describe('SponsoredProductsAdGroupOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const adGroupOperation = operationProvider.create(SponsoredProductsAdGroupOperation)
  const CAMPAIGN_ID = 31299234922913
  const AD_GROUP_ID = 138818764235694

  describe('getAdGroup', () => {
    it(`should return a single adgroup ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await adGroupOperation.getAdGroup(AD_GROUP_ID)

      expect(res.adGroupId).toBe(AD_GROUP_ID)
      expect(res).toHaveProperty('name')
      expect(res).toHaveProperty('campaignId')
      expect(res).toHaveProperty('defaultBid')
      expect(res.defaultBid).toBeGreaterThan(0.02)
      expect(res.state).toBe(AdGroupStateEnum.ENABLED)
    })
  })

  describe('getAdGroupEx', () => {
    it('should get an extended ad group', async () => {
      const res = await adGroupOperation.getAdGroupEx(AD_GROUP_ID)

      expect(res.adGroupId).toBe(AD_GROUP_ID)
      expect(res).toHaveProperty('name')
      expect(res).toHaveProperty('campaignId')
      expect(res).toHaveProperty('defaultBid')
      expect(res.defaultBid).toBeGreaterThan(0.02)
      expect(res.state).toBe(AdGroupStateEnum.ENABLED)

      expect(res).toHaveProperty('creationDate')
      expect(res).toHaveProperty('lastUpdatedDate')
      expect(res.servingStatus).toBe(AdGroupServingStatusEnum.PORTFOLIO_PENDING_START_DATE)
    })
  })

  describe('createAdGroups', () => {
    it('should create an ad group', async () => {
      const res = await adGroupOperation.createAdGroups([
        {
          name: 'Foo Ad Group',
          state: AdGroupStateEnum.PAUSED,
          defaultBid: 1,
          campaignId: CAMPAIGN_ID,
        },
      ])

      expect(res).toHaveLength(1)
      expect(res[0].code).toBe(AdGroupResponseStatusEnum.SUCCESS)
      expect(res[0]).toHaveProperty('adGroupId')
    })
  })

  describe('updateAdGroups', () => {
    it('should update an ad group', async () => {
      const res = await adGroupOperation.updateAdGroups([
        {
          adGroupId: AD_GROUP_ID,
          name: 'New Name',
          state: AdGroupStateEnum.ENABLED,
          defaultBid: 1,
        },
      ])

      expect(res).toHaveLength(1)
      expect(res[0].code).toBe(AdGroupResponseStatusEnum.SUCCESS)
      expect(res[0]).toHaveProperty('adGroupId')
    })
  })

  describe('archiveAdGroup', () => {
    it('should archive the ad group', async () => {
      const res = await adGroupOperation.archiveAdGroup(AD_GROUP_ID)
      expect(res.code).toBe(AdGroupResponseStatusEnum.SUCCESS)

      if (res.code === AdGroupResponseStatusEnum.SUCCESS) {
        expect(res.adGroupId).toBe(AD_GROUP_ID)
      }
    })
  })

  describe('listAdGroups', () => {
    it('should return a list of ad groups', async () => {
      const res = await adGroupOperation.listAdGroups()
      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0].adGroupId).toBe(AD_GROUP_ID)
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
      expect(res[0]).toHaveProperty('name')
      expect(res[0]).toHaveProperty('defaultBid')
      expect(res[0].defaultBid).toBeGreaterThan(0)
      expect(res[0].state).toBe(AdGroupStateEnum.ARCHIVED)
    })

    it('should accept params', async () => {
      const res = await adGroupOperation.listAdGroups({
        adGroupIdFilter: [AD_GROUP_ID],
        campaignIdFilter: [CAMPAIGN_ID],
        count: 1,
        stateFilter: [AdGroupStateEnum.ARCHIVED],
      })

      expect(res).toHaveLength(1)
      expect(res[0].adGroupId).toBe(AD_GROUP_ID)
      expect(res[0].campaignId).toBe(CAMPAIGN_ID)
    })
  })

  describe('listAdGroupsEx', () => {
    it('should return an extended list of ad groups', async () => {
      const res = await adGroupOperation.listAdGroupsEx()
      expect(Array.isArray(res)).toBeTruthy()
      expect(res[0]).toHaveProperty('creationDate')
      expect(res[0]).toHaveProperty('lastUpdatedDate')
      expect(res[0].servingStatus).toBe(AdGroupServingStatusEnum.PORTFOLIO_PENDING_START_DATE)
    })
  })
})
