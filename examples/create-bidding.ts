import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import {
  AmazonAdvertising,
  KeywordBidRecommendationsData,
  BidRecommendationRequest,
} from '@scaleleap/amazon-advertising-api-sdk'

const auth = {
  accessToken: 'Atza|IQEBLjAsAhRmHjNgHpi0U...',
  clientId: 'amzn1.application-oa2-client.a8358a60...',
  scope: 1234567890,
}
const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.US, auth)
const sponsoredProductsBidRecommendationOperation =
  amazonAdvertising.sponsoredProductsBidRecommendation

// Request bid recommendations for a list of up to 100 keywords.
const keywordBidRecommendations: KeywordBidRecommendationsData = {
  adGroupId: 123,
  keywords: [
    {
      keyword: 'Apple',
      matchType: 'broad',
    },
  ],
}
sponsoredProductsBidRecommendationOperation.createKeywordBidRecommendations(
  keywordBidRecommendations,
)

// Request bid recommendations for specified ad group.
sponsoredProductsBidRecommendationOperation.getAdGroupBidRecommendations(123)

// Retrieve a list of bid recommendations for keyword, product, or auto targeting expressions by adGroupId.
const bidRecommendationRequest: BidRecommendationRequest = {
  expressions: [
    {
      type: 'queryExactMatches',
      value: 'oranges',
    },
  ],
  adGroupId: 217706707887211,
}
sponsoredProductsBidRecommendationOperation.getBidRecommendations(bidRecommendationRequest)

// Request bid recommendations for specified keyword.
sponsoredProductsBidRecommendationOperation.getKeywordBidRecommendations(123)
