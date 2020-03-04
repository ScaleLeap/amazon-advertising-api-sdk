import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsTargetingRecommendationsOperation } from '../../../src/operations/recommendations/sponsored-brands-targeting-recommendations-operation'
import { httpClientFactory } from '../../http-client-factory'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import {
  SBProductRecommendationsRequest,
  SBProductRecommendationFilterTypeEnum,
  SBCategoryRecommendationsRequest,
  SBBrandRecommendationsRequest,
} from '../../../src/operations/recommendations/types'

/**
 * TODO: Need check again on Production API. Sandbox API returns an error:
 * Could not find resource for full path: https://advertising-api-test.amazon.com/v2/hsa/recommendations/targets/product/list
 */
describe.skip('SponsoredBrandsTargetingRecommendationsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsTargetingRecommendationsOperation)
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']

  describe('getProductRecommendations', () => {
    it(`should return a list of recommended products for targeting ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const MAX_RESULT = 1

      const params: SBProductRecommendationsRequest = {
        nextToken: '',
        maxResults: MAX_RESULT,
        filters: [
          {
            filterType: SBProductRecommendationFilterTypeEnum.ASINS,
            values: ASINS,
          },
        ],
      }
      const res = await operation.getProductRecommendations(params)

      expect(res.recommendedProducts).toHaveLength(MAX_RESULT)
    })
  })

  describe('getCategoryRecommendations', () => {
    it(`should return a list of recommended categories for targeting ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBCategoryRecommendationsRequest = {
        asins: ASINS,
      }
      const res = await operation.getCategoryRecommendations(params)

      expect(res).toHaveProperty('categoryRecommendationResults')
    })
  })

  describe('getBrandRecommendations', () => {
    it(`should return a list of brand suggestions base on category id ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const CATEGORY_ID = 123
      const params: SBBrandRecommendationsRequest = {
        categoryId: CATEGORY_ID,
      }
      const res = await operation.getBrandRecommendations(params)

      expect(res).toHaveProperty('brandRecommendationResults')
    })

    it(`should return a list of brand suggestions base on keyword ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const KEYWORD = 'Apple'
      const params: SBBrandRecommendationsRequest = {
        keyword: KEYWORD,
      }
      const res = await operation.getBrandRecommendations(params)

      expect(res).toHaveProperty('brandRecommendationResults')
    })
  })
})
