import { amazonAdvertising } from './auth'
import {
  SponsoredBrandsBidsRecommendationRequest,
  SponsoredBrandsBrandRecommendationsRequest,
  SponsoredBrandsCategoryRecommendationsRequest,
  SponsoredBrandsProductRecommendationsRequest,
} from '../src'

const sponsoredBrandsBidRecommendationsOperation =
  amazonAdvertising.sponsoredBrandsBidRecommendations

const sponsoredBrandsTargetingRecommendationsOperation =
  amazonAdvertising.sponsoredBrandsTargetingRecommendations

const ASINS = ['B07663Z46Z', 'B07H8QMZWV', 'B07C65XFBB']

// Get a list of bid recommendation objects for a specified list of keywords or products.
const sponsoredBrandsBidsRecommendationRequest: SponsoredBrandsBidsRecommendationRequest = {
  campaignId: 0,
  targets: [
    {
      type: 'asinCategorySameAs',
      value: 'string',
    },
  ],
  keywords: [
    {
      matchType: 'broad',
      keywordText: 'string',
    },
  ],
}
sponsoredBrandsBidRecommendationsOperation.getBidRecommendations(
  sponsoredBrandsBidsRecommendationRequest,
)

// Gets a list of brand suggestions.
const sponsoredBrandsBrandRecommendationsRequest: SponsoredBrandsBrandRecommendationsRequest = {
  categoryId: 123,
}
sponsoredBrandsTargetingRecommendationsOperation.getBrandRecommendations(
  sponsoredBrandsBrandRecommendationsRequest,
)

// Gets a list of recommended categories for targeting.
const sponsoredBrandsCategoryRecommendationsRequest: SponsoredBrandsCategoryRecommendationsRequest = {
  asins: ASINS,
}
sponsoredBrandsTargetingRecommendationsOperation.getCategoryRecommendations(
  sponsoredBrandsCategoryRecommendationsRequest,
)

// Gets a list of recommended products for targeting.
const sponsoredBrandsProductRecommendationsRequest: SponsoredBrandsProductRecommendationsRequest = {
  nextToken: '',
  maxResults: 1,
  filters: [
    {
      filterType: 'ASINS',
      values: ASINS,
    },
  ],
}
sponsoredBrandsTargetingRecommendationsOperation.getProductRecommendations(
  sponsoredBrandsProductRecommendationsRequest,
)
