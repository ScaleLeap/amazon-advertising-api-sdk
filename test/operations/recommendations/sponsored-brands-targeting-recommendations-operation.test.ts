import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsTargetingRecommendationsOperation } from '../../../src/operations/recommendations/sponsored-brands-targeting-recommendations-operation'
import { httpClientFactory } from '../../http-client-factory'
import {
  SponsoredBrandsProductRecommendationsRequest,
  SponsoredBrandsCategoryRecommendationsRequest,
  SponsoredBrandsBrandRecommendationsRequest,
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
    it(`should return a list of recommended products for targeting`, async () => {
      const MAX_RESULT = 1

      const params: SponsoredBrandsProductRecommendationsRequest = {
        nextToken: '',
        maxResults: MAX_RESULT,
        filters: [
          {
            filterType: 'ASINS',
            values: ASINS,
          },
        ],
      }
      const res = await operation.getProductRecommendations(params)

      expect(res.recommendedProducts).toHaveLength(MAX_RESULT)
    })
  })

  describe('getCategoryRecommendations', () => {
    it(`should return a list of recommended categories for targeting`, async () => {
      const params: SponsoredBrandsCategoryRecommendationsRequest = {
        asins: ASINS,
      }
      const res = await operation.getCategoryRecommendations(params)

      expect(res).toHaveProperty('categoryRecommendationResults')
    })
  })

  describe('getBrandRecommendations', () => {
    it(`should return a list of brand suggestions base on category id`, async () => {
      const CATEGORY_ID = 123
      const params: SponsoredBrandsBrandRecommendationsRequest = {
        categoryId: CATEGORY_ID,
      }
      const res = await operation.getBrandRecommendations(params)

      expect(res).toHaveProperty('brandRecommendationResults')
    })

    it(`should return a list of brand suggestions base on keyword`, async () => {
      const KEYWORD = 'Apple'
      const params: SponsoredBrandsBrandRecommendationsRequest = {
        keyword: KEYWORD,
      }
      const res = await operation.getBrandRecommendations(params)

      expect(res).toHaveProperty('brandRecommendationResults')
    })
  })
})
