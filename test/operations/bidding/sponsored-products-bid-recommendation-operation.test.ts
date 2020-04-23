import { OperationProvider } from '../../../src/operations/operation-provider'
import { httpClientFactory } from '../../http-client-factory'
import { SponsoredProductsBidRecommendationOperation } from '../../../src/operations/bidding/sponsored-products-bid-recommendation-operation'
import {
  KeywordBidRecommendationsData,
  BidRecommendationsResponseCode,
  KeywordBidRecommendationsMatchType,
  BidRecommendationRequest,
  SponsoredProductsProductAdsOperation,
  CreateProductAdParams,
} from '../../../src'
import { delay } from '../../test-utils'

describe('SponsoredProductsBidRecommendationOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredProductsBidRecommendationOperation)
  const productAdsOperation = operationProvider.create(SponsoredProductsProductAdsOperation)
  const AUTO_AD_GROUP_ID = 164621261612363
  const MANUAL_AD_GROUP_ID = 149522344269714
  const SKU = 'AB-RED-8675309'

  describe('getAdGroupBidRecommendations', () => {
    it(`should retrieve bid recommendation data for the specified adGroup id`, async () => {
      const params: CreateProductAdParams[] = [
        {
          campaignId: 31299234922913,
          adGroupId: 164621261612363,
          state: 'enabled',
          sku: SKU,
        },
      ]
      await productAdsOperation.createProductAds(params)

      await delay()

      const res = await operation.getAdGroupBidRecommendations(AUTO_AD_GROUP_ID)

      expect(res.adGroupId).toBe(AUTO_AD_GROUP_ID)
    })
  })

  describe('getKeywordBidRecommendations', () => {
    it(`should retrieve bid recommendation data for the specified keyword id`, async () => {
      const KEYWORD_ID = 16577721726418
      const res = await operation.getKeywordBidRecommendations(KEYWORD_ID)

      expect(res.keywordId).toBe(KEYWORD_ID)
      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
    })
  })

  describe('createKeywordBidRecommendations', () => {
    it(`should retrieve keyword bid recommendation data for one or more keywords`, async () => {
      const params: KeywordBidRecommendationsData = {
        adGroupId: MANUAL_AD_GROUP_ID,
        keywords: [
          {
            keyword: 'Apple1',
            matchType: 'broad',
          },
          {
            keyword: 'Apple2',
            matchType: 'exact',
          },
          {
            keyword: 'Apple3',
            matchType: 'phrase',
          },
        ],
      }
      const res = await operation.createKeywordBidRecommendations(params)
      const [recommendation] = res.recommendations

      expect(res.adGroupId).toBe(MANUAL_AD_GROUP_ID)
      expect(recommendation.code).toBe<BidRecommendationsResponseCode>('SUCCESS')
      expect(recommendation.keyword).toBe('Apple1')
      expect(recommendation.matchType).toBe<KeywordBidRecommendationsMatchType>('broad')
    })
  })

  /**
   * TODO: Need check again on Production API
   * Sandbox API retuns an error:
   * UnprocessableEntityError: The server understood your request but was unable to process one or more parameters.
   */
  describe.skip('getBidRecommendations', () => {
    it(`should retrieve a list of bid recommendations for keyword, product or auto targeting expressions by adGroupId`, async () => {
      const EXPRESSION_VALUE = 'Apple'
      const EXPRESSION_TYPE = 'queryBroadRelMatches'

      const params: BidRecommendationRequest = {
        adGroupId: AUTO_AD_GROUP_ID,
        expressions: [
          {
            value: EXPRESSION_VALUE,
            type: EXPRESSION_TYPE,
          },
        ],
      }
      const res = await operation.getBidRecommendations(params)
      const [recommendation] = res.recommendations

      expect(res.adGroupId).toBe(AUTO_AD_GROUP_ID)
      expect(recommendation.code).toBe<BidRecommendationsResponseCode>('SUCCESS')
      expect(recommendation.expression.value).toBe(EXPRESSION_VALUE)
      expect(recommendation.expression.type).toBe(EXPRESSION_TYPE)
    })
  })
})
