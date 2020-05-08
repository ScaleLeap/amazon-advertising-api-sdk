import { amazonAdvertising } from './auth'

import { KeywordBidRecommendationsData, BidRecommendationRequest } from '../src'

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
