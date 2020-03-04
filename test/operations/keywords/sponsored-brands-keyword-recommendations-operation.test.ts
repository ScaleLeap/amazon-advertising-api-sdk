import { SponsoredBrandsKeywordRecommendationsOperation } from '../../../src/operations/keywords/sponsored-brands-keyword-recommendations-operation'
import { POLLY_PASSTHROUGH_TAG } from '../../constants'
import { httpClientFactory } from '../../http-client-factory'
import { OperationProvider } from '../../../src'
import { SBKeywordRecommendationParams } from '../../../src/operations/keywords/types'

/**
 * TODO: Sandbox API returns an error. Need check again on Production API
 * Error message: 'ResourceNotFoundError: Could not find resource for full path: https://advertising-api-test.amazon.com/v1/hsa/recommendations/keyword'
 */
describe.skip('SponsoredBrandsKeywordRecommendationsOperation', () => {
  const client = httpClientFactory()
  const operationProvider = new OperationProvider(client)
  const operation = operationProvider.create(SponsoredBrandsKeywordRecommendationsOperation)
  const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']
  const STORE_PAGE_URL =
    'https://www.amazon.com/Amazon-Renewed/b/ref=bl_dp_s_web_12653393011?ie=UTF8&node=12653393011&field-lbr_brands_browse-bin=Amazon+Renewed&nocache=1581845842261'

  describe('getKeywordRecommendations', () => {
    it(`should return an array of keyword recommendations for a set of ASINs ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBKeywordRecommendationParams = {
        asins: ASINS,
      }
      const res = await operation.getKeywordRecommendations(params)

      expect(Array.isArray(res)).toBeTruthy()
    })

    it(`should return an array of keyword recommendations for a Store page ${POLLY_PASSTHROUGH_TAG}`, async () => {
      const params: SBKeywordRecommendationParams = {
        url: STORE_PAGE_URL,
      }
      const res = await operation.getKeywordRecommendations(params)

      expect(Array.isArray(res)).toBeTruthy()
    })
  })
})
