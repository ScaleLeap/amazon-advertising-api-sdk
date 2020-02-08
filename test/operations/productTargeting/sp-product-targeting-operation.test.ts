import setupPolly from '../../polly'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { SponsoredProductsProductTargetingOperation } from '../../../src/operations/productTargeting/sp-product-targeting-operation'
import {
  CreateTargetingClausesParams,
  TargetingClauseStateEnum,
  TargetingExpressionTypeEnum,
  ExpressionTypeEnum,
  ListTargetingClausesParams,
  UpdateTargetingClausesParams,
  ProductRecommendationRequest,
  CreateNegativeTargetingClausesParams,
  ListNegativeTargetingClausesParams,
  UpdateNegativeTargetingClausesParams,
} from '../../../src/operations/productTargeting/types'

setupPolly()

describe('SponsoredProductsProductTargetingOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsProductTargetingOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 202694745498469
  const TARGET_ID = 256247845256441
  const NEGATIVE_TARGET_ID = 160326773421036
  const CATEGORY_ID = 2335752011
  const ASIN = 'B07663Z46Z'
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
  const PAGE_SIZE = 10
  const KEYWORD = 'Apple'

  describe('getTargetingClause', () => {
    it(`should retrieve a targeting clause with a specific target ID ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getTargetingClause(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('getTargetingClauseExtended', () => {
    it(`should retrieve a targeting clause with additional attributes using a specific target ID ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getTargetingClauseExtended(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('listTargetingClauses', () => {
    it(`should retrieve a list of targeting clauses ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.listTargetingClauses()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of targeting clauses satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListTargetingClausesParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        targetIdFilter: [TARGET_ID],
      }
      const [res] = await operation.listTargetingClauses(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('listTargetingClausesExtended', () => {
    it(`should retrieve a list of targeting clauses with additional attributes ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.listTargetingClausesExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of targeting clauses with additional attributes satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListTargetingClausesParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        targetIdFilter: [TARGET_ID],
      }
      const [res] = await operation.listTargetingClausesExtended(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe.skip('createTargetingClauses', () => {
    it(`should create one or more targeting expressions ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: TargetingClauseStateEnum.PAUSED,
          expression: [
            {
              type: TargetingExpressionTypeEnum.ASIN_SAME_AS,
              value: ASIN,
            },
          ],
          expressionType: ExpressionTypeEnum.MANUAL,
          bid: 10,
        },
      ]
      const res = await operation.createTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('updateTargetingClauses', () => {
    it(`should updates one or more targeting clauses ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: UpdateTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: TargetingClauseStateEnum.PAUSED,
          expression: [
            {
              type: TargetingExpressionTypeEnum.ASIN_SAME_AS,
              value: ASIN,
            },
          ],
          expressionType: ExpressionTypeEnum.MANUAL,
          bid: 10,
        },
      ]
      const res = await operation.updateTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('archiveTargetingClause', () => {
    it(`should set the status of targeting clauses to archived ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.archiveTargetingClause(TARGET_ID)

      expect(res).toHaveProperty('targetId')
    })
  })

  describe('createTargetRecommendations', () => {
    it(`should return list of recommended products to target ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ProductRecommendationRequest = {
        pageSize: PAGE_SIZE,
        pageNumber: 1,
        asins: ASINS,
      }
      const res = await operation.createTargetRecommendations(params)

      expect(res.totalResultCount).toEqual(PAGE_SIZE)
      expect(res.recommendedProducts).toHaveLength(PAGE_SIZE)
    })
  })

  describe('getTargetingCategories', () => {
    it(`should return a list of targeting categories ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getTargetingCategories(ASINS)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getRefinementsForCategory', () => {
    it(`should return refinements for a single category ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getRefinementsForCategory(CATEGORY_ID)

      expect(res.categoryId).toEqual(CATEGORY_ID)
    })
  })

  describe('getBrandRecommendations', () => {
    it(`should return recommended brands for the specified keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getBrandRecommendations({ keyword: KEYWORD })

      expect(res).toBeTruthy()
    })

    it(`should return recommended brands for the specified category id ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getBrandRecommendations({ categoryId: CATEGORY_ID })

      expect(res).toBeTruthy()
    })
  })

  describe.skip('createNegativeTargetingClauses', () => {
    it(`should create one or more negative targeting clauses at the campaign level ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: CreateNegativeTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: TargetingClauseStateEnum.PAUSED,
          expression: [
            {
              type: TargetingExpressionTypeEnum.ASIN_SAME_AS,
              value: ASIN,
            },
          ],
          expressionType: ExpressionTypeEnum.MANUAL,
        },
      ]
      const res = await operation.createNegativeTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getNegativeTargetingClause', () => {
    it(`should retrieve a negative targeting clause with a specific target ID ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getNegativeTargetingClause(NEGATIVE_TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(NEGATIVE_TARGET_ID)
    })
  })

  describe('getNegativeTargetingClauseExtended', () => {
    it(`should retrieve a negative targeting clause with additional attributes using a specific target ID ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.getNegativeTargetingClauseExtended(NEGATIVE_TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(NEGATIVE_TARGET_ID)
    })
  })

  describe('listNegativeTargetingClauses', () => {
    it(`should retrieve a list of negative targeting clauses ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.listNegativeTargetingClauses()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of negative targeting clauses satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListNegativeTargetingClausesParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        targetIdFilter: [NEGATIVE_TARGET_ID],
      }
      const [res] = await operation.listNegativeTargetingClauses(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(NEGATIVE_TARGET_ID)
    })
  })

  describe('listNegativeTargetingClausesExtended', () => {
    it(`should retrieve a list of negative targeting clauses with additional attributes ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const res = await operation.listNegativeTargetingClausesExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of negative targeting clauses with additional attributes satisfying optional criteria ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: ListNegativeTargetingClausesParams = {
        startIndex: 0,
        count: 1,
        campaignIdFilter: [CAMPAIGN_ID],
        adGroupIdFilter: [AD_GROUP_ID],
        targetIdFilter: [NEGATIVE_TARGET_ID],
      }
      const [res] = await operation.listNegativeTargetingClausesExtended(params)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(NEGATIVE_TARGET_ID)
    })
  })

  describe('updateNegativeTargetingClauses', () => {
    it(`should updates one or more negative targeting clauses ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: UpdateNegativeTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          targetId: NEGATIVE_TARGET_ID,
          state: TargetingClauseStateEnum.PAUSED,
          expression: [
            {
              type: TargetingExpressionTypeEnum.ASIN_SAME_AS,
              value: ASIN,
            },
          ],
          expressionType: ExpressionTypeEnum.MANUAL,
        },
      ]
      const [res] = await operation.updateNegativeTargetingClauses(params)

      expect(res).toHaveProperty('targetId')
    })
  })
})
