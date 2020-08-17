import { AmazonAdvertising } from '../src/amazon-advertising'
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { auth } from './http-client-factory'
import { SponsoredBrandsAdGroupOperation } from '../src/operations/ad-groups/sponsored-brands-ad-group-operation'
import { SponsoredDisplayAdGroupOperation } from '../src/operations/ad-groups/sponsored-display-ad-group-operation'
import { SponsoredProductsAdGroupOperation } from '../src/operations/ad-groups/sponsored-products-ad-group-operation'
import { SponsoredProductsBidRecommendationOperation } from '../src/operations/bidding/sponsored-products-bid-recommendation-operation'
import { SponsoredBrandsCampaignOperation } from '../src/operations/campaigns/sponsored-brands-campaign-operation'
import { SponsoredDisplayCampaignOperation } from '../src/operations/campaigns/sponsored-display-campaign-operation'
import { SponsoredProductsCampaignOperation } from '../src/operations/campaigns/sponsored-products-campaign-operation'
import { SponsoredBrandsDraftsOperation } from '../src/operations/drafts/sponsored-brands-drafts-operation'
import { SponsoredBrandsKeywordRecommendationsOperation } from '../src/operations/keywords/sponsored-brands-keyword-recommendations-operation'
import { SponsoredBrandsKeywordsOperation } from '../src/operations/keywords/sponsored-brands-keywords-operation'
import { SponsoredBrandsNegativeKeywordsOperation } from '../src/operations/keywords/sponsored-brands-negative-keywords-operation'
import { SponsoredProductsAdGroupKeywordsOperation } from '../src/operations/keywords/sponsored-products-ad-group-keywords-operation'
import { SponsoredProductsAdGroupNegativeKeywordsOperation } from '../src/operations/keywords/sponsored-products-ad-group-negative-keywords-operation'
import { SponsoredProductsCampaignNegativeKeywordsOperation } from '../src/operations/keywords/sponsored-products-campaign-negative-keywords-operation'
import { SponsoredProductsSuggestedKeywordsOperation } from '../src/operations/keywords/sponsored-products-suggested-keywords-operation'
import { PortfolioOperation } from '../src/operations/portfolios/portfolio-operation'
import { SponsoredProductsProductAdsOperation } from '../src/operations/product-ads/sponsored-products-product-ads-operation'
import { SponsoredBrandsProductTargetingOperation } from '../src/operations/product-targeting/sponsored-brands-product-targeting-operation'
import { SponsoredProductsProductTargetingOperation } from '../src/operations/product-targeting/sponsored-products-product-targeting-operation'
import { ProfileOperation } from '../src/operations/profiles/profile-operation'
import { SponsoredBrandsBidRecommendationsOperation } from '../src/operations/recommendations/sponsored-brands-bid-recommendations-operation'
import { SponsoredBrandsTargetingRecommendationsOperation } from '../src/operations/recommendations/sponsored-brands-targeting-recommendations-operation'
import { SponsoredBrandsReportOperation } from '../src/operations/reports/sponsored-brands/sponsored-brands-report-operation'
import { SponsoredDisplayReportOperation } from '../src/operations/reports/sponsored-display/sponsored-display-report-operation'
import { SponsoredProductsReportOperation } from '../src/operations/reports/sponsored-products/sponsored-products-report-operation'
import { SponsoredBrandsSnapshotOperation } from '../src/operations/snapshots/sponsored-brands-snapshot-operation'
import { SponsoredProductsSnapshotOperation } from '../src/operations/snapshots/sponsored-products-snapshot-operation'
import { SponsoredBrandsStoresInfoOperation } from '../src/operations/stores/sponsored-brands-stores-info-operation'
import { getAdvertising } from './test-utils'

const amazonAdvertising = new AmazonAdvertising(getAdvertising(amazonMarketplaces.JP), auth)

describe('AmazonAdvertising', () => {
  it('should return SponsoredBrandsAdGroupOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsAdGroup
    expect(operation).toBeInstanceOf(SponsoredBrandsAdGroupOperation)
  })

  it('should return SponsoredDisplayAdGroupOperation', () => {
    const operation = amazonAdvertising.sponsoredDisplayAdGroup
    expect(operation).toBeInstanceOf(SponsoredDisplayAdGroupOperation)
  })

  it('should return SponsoredProductsAdGroupOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsAdGroup
    expect(operation).toBeInstanceOf(SponsoredProductsAdGroupOperation)
  })

  it('should return SponsoredProductsBidRecommendationOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsBidRecommendation
    expect(operation).toBeInstanceOf(SponsoredProductsBidRecommendationOperation)
  })

  it('should return SponsoredBrandsCampaignOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsCampaign
    expect(operation).toBeInstanceOf(SponsoredBrandsCampaignOperation)
  })

  it('should return SponsoredDisplayCampaignOperation', () => {
    const operation = amazonAdvertising.sponsoredDisplayCampaign
    expect(operation).toBeInstanceOf(SponsoredDisplayCampaignOperation)
  })

  it('should return SponsoredProductsCampaignOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsCampaign
    expect(operation).toBeInstanceOf(SponsoredProductsCampaignOperation)
  })

  it('should return SponsoredBrandsDraftsOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsDrafts
    expect(operation).toBeInstanceOf(SponsoredBrandsDraftsOperation)
  })

  it('should return SponsoredBrandsKeywordRecommendationsOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsKeywordRecommendations
    expect(operation).toBeInstanceOf(SponsoredBrandsKeywordRecommendationsOperation)
  })

  it('should return SponsoredBrandsKeywordsOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsKeywords
    expect(operation).toBeInstanceOf(SponsoredBrandsKeywordsOperation)
  })

  it('should return SponsoredBrandsNegativeKeywordsOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsNegativeKeywords
    expect(operation).toBeInstanceOf(SponsoredBrandsNegativeKeywordsOperation)
  })

  it('should return SponsoredProductsAdGroupKeywordsOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsAdGroupKeywords
    expect(operation).toBeInstanceOf(SponsoredProductsAdGroupKeywordsOperation)
  })

  it('should return SponsoredProductsAdGroupNegativeKeywordsOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsAdGroupNegativeKeywords
    expect(operation).toBeInstanceOf(SponsoredProductsAdGroupNegativeKeywordsOperation)
  })

  it('should return SponsoredProductsCampaignNegativeKeywordsOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsCampaignNegativeKeywords
    expect(operation).toBeInstanceOf(SponsoredProductsCampaignNegativeKeywordsOperation)
  })

  it('should return SponsoredProductsSuggestedKeywordsOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsSuggestedKeywords
    expect(operation).toBeInstanceOf(SponsoredProductsSuggestedKeywordsOperation)
  })

  it('should return PortfolioOperation', () => {
    const operation = amazonAdvertising.portfolio
    expect(operation).toBeInstanceOf(PortfolioOperation)
  })

  it('should return SponsoredProductsProductAdsOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsProductAds
    expect(operation).toBeInstanceOf(SponsoredProductsProductAdsOperation)
  })

  it('should return SponsoredBrandsProductTargetingOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsProductTargeting
    expect(operation).toBeInstanceOf(SponsoredBrandsProductTargetingOperation)
  })

  it('should return SponsoredProductsProductTargetingOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsProductTargeting
    expect(operation).toBeInstanceOf(SponsoredProductsProductTargetingOperation)
  })

  it('should return ProfileOperation', () => {
    const operation = amazonAdvertising.profile
    expect(operation).toBeInstanceOf(ProfileOperation)
  })

  it('should return SponsoredBrandsBidRecommendationsOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsBidRecommendations
    expect(operation).toBeInstanceOf(SponsoredBrandsBidRecommendationsOperation)
  })

  it('should return SponsoredBrandsTargetingRecommendationsOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsTargetingRecommendations
    expect(operation).toBeInstanceOf(SponsoredBrandsTargetingRecommendationsOperation)
  })

  it('should return SponsoredBrandsReportOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsReport
    expect(operation).toBeInstanceOf(SponsoredBrandsReportOperation)
  })

  it('should return SponsoredDisplayReportOperation', () => {
    const operation = amazonAdvertising.sponsoredDisplayReport
    expect(operation).toBeInstanceOf(SponsoredDisplayReportOperation)
  })

  it('should return SponsoredProductsReportOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsReport
    expect(operation).toBeInstanceOf(SponsoredProductsReportOperation)
  })

  it('should return SponsoredBrandsSnapshotOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsSnapshot
    expect(operation).toBeInstanceOf(SponsoredBrandsSnapshotOperation)
  })

  it('should return SponsoredProductsSnapshotOperation', () => {
    const operation = amazonAdvertising.sponsoredProductsSnapshot
    expect(operation).toBeInstanceOf(SponsoredProductsSnapshotOperation)
  })

  it('should return SponsoredBrandsStoresInfoOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsStoresInfo
    expect(operation).toBeInstanceOf(SponsoredBrandsStoresInfoOperation)
  })
})
