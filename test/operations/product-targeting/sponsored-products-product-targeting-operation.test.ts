import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { SponsoredProductsProductTargetingOperation } from '../../../src/operations/product-targeting/sponsored-products-product-targeting-operation'
import {
  CreateTargetingClausesParams,
  ListTargetingClausesParams,
  UpdateTargetingClausesParams,
  ProductRecommendationRequest,
} from '../../../src/operations/product-targeting/types'

describe('SponsoredProductsProductTargetingOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsProductTargetingOperation)
  const CAMPAIGN_ID = 164069484151709
  const AD_GROUP_ID = 202694745498469
  const TARGET_ID = 256247845256441
  const CATEGORY_ID = 2335752011
  const ASIN = 'B07663Z46Z'
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
  const PAGE_SIZE = 10
  const KEYWORD = 'Apple'

  describe('createTargetingClauses', () => {
    it(`should create one or more targeting expressions`, async () => {
      const params: CreateTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          state: 'paused',
          expression: [
            {
              type: 'asinSameAs',
              value: ASIN,
            },
          ],
          expressionType: 'manual',
          bid: 10,
        },
      ]
      const res = await operation.createTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getTargetingClause', () => {
    it(`should retrieve a targeting clause with a specific target ID`, async () => {
      const res = await operation.getTargetingClause(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('getTargetingClauseExtended', () => {
    it(`should retrieve a targeting clause with additional attributes using a specific target ID`, async () => {
      const res = await operation.getTargetingClauseExtended(TARGET_ID)

      expect(res.campaignId).toEqual(CAMPAIGN_ID)
      expect(res.adGroupId).toEqual(AD_GROUP_ID)
      expect(res.targetId).toEqual(TARGET_ID)
    })
  })

  describe('listTargetingClauses', () => {
    it(`should retrieve a list of targeting clauses`, async () => {
      const res = await operation.listTargetingClauses()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of targeting clauses satisfying optional criteria`, async () => {
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
    it(`should retrieve a list of targeting clauses with additional attributes`, async () => {
      const res = await operation.listTargetingClausesExtended()

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should retrieve a list of targeting clauses with additional attributes satisfying optional criteria`, async () => {
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

  describe('updateTargetingClauses', () => {
    it(`should updates one or more targeting clauses`, async () => {
      const params: UpdateTargetingClausesParams[] = [
        {
          campaignId: CAMPAIGN_ID,
          adGroupId: AD_GROUP_ID,
          targetId: TARGET_ID,
          state: 'archived',
          expression: [
            {
              type: 'asinSameAs',
              value: ASIN,
            },
          ],
          expressionType: 'manual',
          bid: 10,
        },
      ]
      const res = await operation.updateTargetingClauses(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('archiveTargetingClause', () => {
    it(`should set the status of targeting clauses to archived`, async () => {
      const res = await operation.archiveTargetingClause(TARGET_ID)

      expect(res).toHaveProperty('targetId')
    })
  })

  describe('createTargetRecommendations', () => {
    it(`should return list of recommended products to target`, async () => {
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
    it(`should return a list of targeting categories`, async () => {
      const res = await operation.getTargetingCategories(ASINS)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })

  describe('getRefinementsForCategory', () => {
    it(`should return refinements for a single category`, async () => {
      const res = await operation.getRefinementsForCategory(CATEGORY_ID)

      expect(res.categoryId).toEqual(CATEGORY_ID)
    })
  })

  describe('getBrandRecommendations', () => {
    it(`should return recommended brands for the specified keyword`, async () => {
      const res = await operation.getBrandRecommendations({ keyword: KEYWORD })

      expect(res).toBeTruthy()
    })

    it(`should return recommended brands for the specified category id`, async () => {
      const res = await operation.getBrandRecommendations({ categoryId: CATEGORY_ID })

      expect(res).toBeTruthy()
    })
  })
})
