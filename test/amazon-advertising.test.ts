import { AmazonAdvertising } from '../src/amazon-advertising'
import { amazonMarketplaces } from '@scaleleap/amazon-marketplaces'
import { auth } from './http-client-factory'
import {
  SponsoredBrandsAdGroupOperation,
  SponsoredProductsAdGroupOperation,
  SponsoredProductsBidRecommendationOperation,
  SponsoredBrandsCampaignOperation,
  SponsoredProductsCampaignOperation,
  SponsoredBrandsDraftsOperation,
  SponsoredBrandsKeywordRecommendationsOperation,
  SponsoredBrandsKeywordsOperation,
  SponsoredBrandsNegativeKeywordsOperation,
  SponsoredProductsAdGroupKeywordsOperation,
  SponsoredProductsAdGroupNegativeKeywordsOperation,
  SponsoredProductsCampaignNegativeKeywordsOperation,
  SponsoredProductsSuggestedKeywordsOperation,
  PortfolioOperation,
  SponsoredProductsProductAdsOperation,
  SponsoredBrandsProductTargetingOperation,
  SponsoredProductsProductTargetingOperation,
  ProfileOperation,
  SponsoredBrandsBidRecommendationsOperation,
  SponsoredBrandsTargetingRecommendationsOperation,
  SponsoredBrandsReportOperation,
  SponsoredProductsReportOperation,
  SponsoredBrandsSnapshotOperation,
  SponsoredProductsSnapshotOperation,
  SponsoredBrandsStoresInfoOperation,
} from '../src'

const amazonAdvertising = new AmazonAdvertising(amazonMarketplaces.JP, auth)

describe('AmazonAdvertising', () => {
  it('should return SponsoredBrandsAdGroupOperation', () => {
    const operation = amazonAdvertising.sponsoredBrandsAdGroup
    expect(operation).toBeInstanceOf(SponsoredBrandsAdGroupOperation)
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
