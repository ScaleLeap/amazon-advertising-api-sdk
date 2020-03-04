import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { SponsoredBrandsProductTargetingOperation } from '../../../src/operations/product-targeting/sb-product-targeting-operation'
import {
  SBCreateTargetsRequest,
  ProductPredicateTypeEnum,
  SBListTargetsRequest,
  SBTargetStateEnum,
  SBFilterTypeEnum,
  SBUpdateTargetsRequest,
  SBExpressionStateEnum,
  SBBatchGetTargetsRequest,
  SBListNegativeTargetsRequest,
  SBUpdateNegativeTargetsRequest,
  SBCreateNegativeTargetsRequest,
  SBNegativeExpressionTypeEnum,
  SBBatchGetNegativeTargetsRequest,
} from '../../../src/operations/product-targeting/types'

/**
 * TODO: Sandbox API returns an error. Need check again on Production API
 * Error message: 'ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/targets'
 */
describe.skip('SponsoredBrandsProductTargetingOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsProductTargetingOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 202694745498469
  const TARGET_ID = 256247845256441
  const NEGATIVE_TARGET_ID = 256247845256441
  const BID = 1

  describe('listTargets', () => {
    it(`should return a list of sb targets filtered by specified criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBListTargetsRequest = {
        nextToken: 'string',
        maxResults: 1,
        filters: [
          {
            filterType: SBFilterTypeEnum.STATE,
            values: [SBTargetStateEnum.PAUSED],
          },
          {
            filterType: SBFilterTypeEnum.CAMPAIGN_ID,
            values: [CAMPAIGN_ID],
          },
          {
            filterType: SBFilterTypeEnum.AD_GROUP_ID,
            values: [AD_GROUP_ID],
          },
        ],
      }
      const res = await operation.listTargets(params)

      expect(res).toHaveProperty('nextToken')
    })
  })

  describe('updateTargets', () => {
    it(`should update one or more sb targets ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBUpdateTargetsRequest[] = [
        {
          targetId: TARGET_ID,
          adGroupId: AD_GROUP_ID,
          campaignId: CAMPAIGN_ID,
          state: SBExpressionStateEnum.ARCHIVED,
          bid: BID,
        },
      ]
      const res = await operation.updateTargets(params)

      expect(Array.isArray(res.updateTargetErrorResults)).toBeTruthy()
      expect(Array.isArray(res.updateTargetSuccessResults)).toBeTruthy()
    })
  })

  describe('createTargets', () => {
    it(`should create one or more sb targets ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBCreateTargetsRequest = {
        targets: [
          {
            adGroupId: AD_GROUP_ID,
            campaignId: CAMPAIGN_ID,
            expressions: {
              type: ProductPredicateTypeEnum.ASIN_BRAND_SAME_AS,
              value: 'Apple',
            },
            bid: BID,
          },
        ],
      }
      const res = await operation.createTargets(params)

      expect(Array.isArray(res.createTargetErrorResults)).toBeTruthy()
      expect(Array.isArray(res.createTargetSuccessResults)).toBeTruthy()
    })
  })

  describe('getTarget', () => {
    it(`should return a sb target specified by identifier ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getTarget(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('archiveTarget', () => {
    it(`should archive a sb target specified by identifier ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveTarget(TARGET_ID)

      expect(res).toHaveProperty('targetId')
    })
  })

  describe('archiveTarget', () => {
    it(`should archive a sb target specified by identifier ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBBatchGetTargetsRequest = {
        targetIds: [TARGET_ID],
      }
      const res = await operation.batchGetTargets(params)

      expect(Array.isArray(res.batchGetTargetErrorResults)).toBeTruthy()
      expect(Array.isArray(res.batchGetTargetSuccessResults)).toBeTruthy()
    })
  })

  describe('listNegativeTargets', () => {
    it(`should return a list of sb negative targets filtered by specified criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBListNegativeTargetsRequest = {
        nextToken: 'string',
        maxResults: 1,
        filters: [
          {
            filterType: SBFilterTypeEnum.STATE,
            values: [SBTargetStateEnum.PAUSED],
          },
          {
            filterType: SBFilterTypeEnum.CAMPAIGN_ID,
            values: [CAMPAIGN_ID],
          },
          {
            filterType: SBFilterTypeEnum.AD_GROUP_ID,
            values: [AD_GROUP_ID],
          },
        ],
      }
      const res = await operation.listNegativeTargets(params)

      expect(res).toHaveProperty('nextToken')
    })
  })

  describe('updateNegativeTargets', () => {
    it(`should update one or more sb negative targets ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBUpdateNegativeTargetsRequest = {
        negativeTargets: [
          {
            targetId: NEGATIVE_TARGET_ID,
            adGroupId: AD_GROUP_ID,
            state: SBExpressionStateEnum.ARCHIVED,
          },
        ],
      }
      const res = await operation.updateNegativeTargets(params)

      expect(Array.isArray(res.updateTargetErrorResults)).toBeTruthy()
      expect(Array.isArray(res.updateTargetSuccessResults)).toBeTruthy()
    })
  })

  describe('createNegativeTargets', () => {
    it(`should create one or more sb negative targets ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBCreateNegativeTargetsRequest = {
        negativeTargets: [
          {
            adGroupId: AD_GROUP_ID,
            campaignId: CAMPAIGN_ID,
            expressions: {
              type: SBNegativeExpressionTypeEnum.ASIN_BRAND_SAME_AS,
              value: 'Apple',
            },
          },
        ],
      }
      const res = await operation.createNegativeTargets(params)

      expect(Array.isArray(res.createTargetErrorResults)).toBeTruthy()
      expect(Array.isArray(res.createTargetSuccessResults)).toBeTruthy()
    })
  })

  describe('getNegativeTarget', () => {
    it(`should return a sb negative target specified by identifier ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getNegativeTarget(NEGATIVE_TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(NEGATIVE_TARGET_ID)
    })
  })

  describe('archiveNegativeTarget', () => {
    it(`should archive a sb negative target specified by identifier ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveNegativeTarget(NEGATIVE_TARGET_ID)

      expect(res).toHaveProperty('targetId')
    })
  })

  describe('archiveNegativeTarget', () => {
    it(`should archive a sb negative target specified by identifier ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBBatchGetNegativeTargetsRequest = {
        targetIds: [NEGATIVE_TARGET_ID],
      }
      const res = await operation.batchGetNegativeTargets(params)

      expect(Array.isArray(res.batchGetNegativeTargetErrorResults)).toBeTruthy()
      expect(Array.isArray(res.batchGetNegativeTargetSuccessResults)).toBeTruthy()
    })
  })
})
