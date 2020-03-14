import { OperationProvider } from '../../../src/operations/operation-provider'
import { SponsoredBrandsBidRecommendationsOperation } from '../../../src/operations/recommendations/sponsored-brands-bid-recommendations-operation'
import { httpClientFactory } from '../../http-client-factory'
import { SponsoredBrandsBidsRecommendationRequest } from '../../../src/operations/recommendations/types'
import { ProductPredicateTypeEnum } from '../../../src/operations/product-targeting/types'
import { KeywordMatchTypeEnum } from '../../../src/operations/keywords/types'

/**
 * TODO: Need check again on Production API. Sandbox API returns an error:
 * Could not find resource for full path: https://advertising-api-test.amazon.com/v1/hsa/recommendations/bids
 */
describe.skip('SponsoredBrandsBidRecommendationsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsBidRecommendationsOperation)

  describe('getBidRecommendations', () => {
    it(`should return a list of bid recommendation for keywords or products`, async () => {
      const params: SponsoredBrandsBidsRecommendationRequest = {
        campaignId: 0,
        targets: [
          {
            type: ProductPredicateTypeEnum.ASIN_CATEGORY_SAME_AS,
            value: 'string',
          },
        ],
        keywords: [
          {
            matchType: KeywordMatchTypeEnum.BROAD,
            keywordText: 'string',
          },
        ],
      }
      const res = await operation.getBidRecommendations(params)

      expect(res).toHaveProperty('keywordsBidsRecommendationSuccessResults')
      expect(res).toHaveProperty('keywordsBidsRecommendationErrorResults')
      expect(res).toHaveProperty('targetsBidsRecommendationSuccessResults')
      expect(res).toHaveProperty('targetsBidsRecommendationErrorResults')
    })
  })
})
