import { AmazonMarketplace } from '@scaleleap/amazon-marketplaces'
import { LazyGetter } from 'lazy-get-decorator'
import { HttpClientAuth } from './http-client'
import { HttpClient } from './http-client'
import { OperationProvider } from './operations/operation-provider'
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
} from './index'

export class AmazonAdvertising {
  private operationProvider: OperationProvider

  constructor(private amazonMarketplace: AmazonMarketplace, private auth: HttpClientAuth) {
    const { advertising } = amazonMarketplace

    if (!advertising) {
      throw new Error(`${amazonMarketplace.name} marketplace does not have Amazon Advertising.`)
    }

    const httpClient: HttpClient = new HttpClient(advertising.region.endpoint, auth)
    this.operationProvider = new OperationProvider(httpClient)
  }

  @LazyGetter()
  get sponsoredBrandsAdGroup() {
    return this.operationProvider.create(SponsoredBrandsAdGroupOperation)
  }

  @LazyGetter()
  get sponsoredProductsAdGroup() {
    return this.operationProvider.create(SponsoredProductsAdGroupOperation)
  }

  @LazyGetter()
  get sponsoredProductsBidRecommendation() {
    return this.operationProvider.create(SponsoredProductsBidRecommendationOperation)
  }

  @LazyGetter()
  get sponsoredBrandsCampaign() {
    return this.operationProvider.create(SponsoredBrandsCampaignOperation)
  }

  @LazyGetter()
  get sponsoredProductsCampaign() {
    return this.operationProvider.create(SponsoredProductsCampaignOperation)
  }

  @LazyGetter()
  get sponsoredBrandsDrafts() {
    return this.operationProvider.create(SponsoredBrandsDraftsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsKeywordRecommendations() {
    return this.operationProvider.create(SponsoredBrandsKeywordRecommendationsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsKeywords() {
    return this.operationProvider.create(SponsoredBrandsKeywordsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsNegativeKeywords() {
    return this.operationProvider.create(SponsoredBrandsNegativeKeywordsOperation)
  }

  @LazyGetter()
  get sponsoredProductsAdGroupKeywords() {
    return this.operationProvider.create(SponsoredProductsAdGroupKeywordsOperation)
  }

  @LazyGetter()
  get sponsoredProductsAdGroupNegativeKeywords() {
    return this.operationProvider.create(SponsoredProductsAdGroupNegativeKeywordsOperation)
  }

  @LazyGetter()
  get sponsoredProductsCampaignNegativeKeywords() {
    return this.operationProvider.create(SponsoredProductsCampaignNegativeKeywordsOperation)
  }

  @LazyGetter()
  get sponsoredProductsSuggestedKeywords() {
    return this.operationProvider.create(SponsoredProductsSuggestedKeywordsOperation)
  }

  @LazyGetter()
  get portfolio() {
    return this.operationProvider.create(PortfolioOperation)
  }

  @LazyGetter()
  get sponsoredProductsProductAds() {
    return this.operationProvider.create(SponsoredProductsProductAdsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsProductTargeting() {
    return this.operationProvider.create(SponsoredBrandsProductTargetingOperation)
  }

  @LazyGetter()
  get sponsoredProductsProductTargeting() {
    return this.operationProvider.create(SponsoredProductsProductTargetingOperation)
  }

  @LazyGetter()
  get profile() {
    return this.operationProvider.create(ProfileOperation)
  }

  @LazyGetter()
  get sponsoredBrandsBidRecommendations() {
    return this.operationProvider.create(SponsoredBrandsBidRecommendationsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsTargetingRecommendations() {
    return this.operationProvider.create(SponsoredBrandsTargetingRecommendationsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsReport() {
    return this.operationProvider.create(SponsoredBrandsReportOperation)
  }

  @LazyGetter()
  get sponsoredProductsReport() {
    return this.operationProvider.create(SponsoredProductsReportOperation)
  }

  @LazyGetter()
  get sponsoredBrandsSnapshot() {
    return this.operationProvider.create(SponsoredBrandsSnapshotOperation)
  }

  @LazyGetter()
  get sponsoredProductsSnapshot() {
    return this.operationProvider.create(SponsoredProductsSnapshotOperation)
  }

  @LazyGetter()
  get sponsoredBrandsStoresInfo() {
    return this.operationProvider.create(SponsoredBrandsStoresInfoOperation)
  }
}
