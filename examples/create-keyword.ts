import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import {
  AmazonAdvertising,
  SponsoredBrandsKeywordRecommendationParams,
} from '@scaleleap/amazon-advertising-api-sdk'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredBrandsKeywordRecommendationsOperation = amazonAdvertising.sponsoredBrandsKeywordRecommendations

// Gets an array of keyword recommendation objects for a set of ASINs included either on a landing page or a Store page.
const sponsoredBrandsKeywordRecommendationParams: SponsoredBrandsKeywordRecommendationParams = {
  asins: ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB'],
}
sponsoredBrandsKeywordRecommendationsOperation.getKeywordRecommendations(sponsoredBrandsKeywordRecommendationParams)
