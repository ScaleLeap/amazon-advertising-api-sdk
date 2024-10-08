import { LazyGetter } from 'lazy-get-decorator'
import { HttpClientAuth } from './http-client'
import { HttpClient } from './http-client'
import { OperationProvider } from './operations/operation-provider'
import { SponsoredBrandsAdGroupOperation } from './operations/ad-groups/sponsored-brands-ad-group-operation'
import { SponsoredDisplayAdGroupOperation } from './operations/ad-groups/sponsored-display-ad-group-operation'
import { SponsoredProductsAdGroupOperation } from './operations/ad-groups/sponsored-products-ad-group-operation'
import { SponsoredProductsBidRecommendationOperation } from './operations/bidding/sponsored-products-bid-recommendation-operation'
import { SponsoredBrandsCampaignOperation } from './operations/campaigns/sponsored-brands-campaign-operation'
import { SponsoredDisplayCampaignOperation } from './operations/campaigns/sponsored-display-campaign-operation'
import { SponsoredProductsCampaignOperation } from './operations/campaigns/sponsored-products-campaign-operation'
import { SponsoredBrandsDraftsOperation } from './operations/drafts/sponsored-brands-drafts-operation'
import { SponsoredBrandsKeywordRecommendationsOperation } from './operations/keywords/sponsored-brands-keyword-recommendations-operation'
import { SponsoredBrandsKeywordsOperation } from './operations/keywords/sponsored-brands-keywords-operation'
import { SponsoredBrandsNegativeKeywordsOperation } from './operations/keywords/sponsored-brands-negative-keywords-operation'
import { SponsoredProductsAdGroupKeywordsOperation } from './operations/keywords/sponsored-products-ad-group-keywords-operation'
import { SponsoredProductsAdGroupNegativeKeywordsOperation } from './operations/keywords/sponsored-products-ad-group-negative-keywords-operation'
import { SponsoredProductsCampaignNegativeKeywordsOperation } from './operations/keywords/sponsored-products-campaign-negative-keywords-operation'
import { SponsoredProductsSuggestedKeywordsOperation } from './operations/keywords/sponsored-products-suggested-keywords-operation'
import { PortfolioOperation } from './operations/portfolios/portfolio-operation'
import { SponsoredDisplayProductAdsOperation } from './operations/product-ads/sponsored-display-product-ads-operation'
import { SponsoredProductsProductAdsOperation } from './operations/product-ads/sponsored-products-product-ads-operation'
import { SponsoredBrandsNegativeTargetingOperation } from './operations/negative-targeting/sponsored-brands-negative-targeting-operation'
import { SponsoredBrandsProductTargetingOperation } from './operations/product-targeting/sponsored-brands-product-targeting-operation'
import { SponsoredDisplayNegativeTargetingOperation } from './operations/negative-targeting/sponsored-display-negative-targeting-operation'
import { SponsoredProductsNegativeTargetingOperation } from './operations/negative-targeting/sponsored-products-negative-targeting-operation'
import { SponsoredProductsProductTargetingOperation } from './operations/product-targeting/sponsored-products-product-targeting-operation'
import { ProfileOperation } from './operations/profiles/profile-operation'
import { TestAccountOperation } from './operations/test-accounts/test-account-operation'
import { SponsoredBrandsBidRecommendationsOperation } from './operations/recommendations/sponsored-brands-bid-recommendations-operation'
import { SponsoredBrandsTargetingRecommendationsOperation } from './operations/recommendations/sponsored-brands-targeting-recommendations-operation'
import { SponsoredBrandsReportOperation } from './operations/reports/sponsored-brands/sponsored-brands-report-operation'
import { SponsoredDisplayReportOperation } from './operations/reports/sponsored-display/sponsored-display-report-operation'
import { SponsoredProductsReportOperation } from './operations/reports/sponsored-products/sponsored-products-report-operation'
import { SponsoredBrandsSnapshotOperation } from './operations/snapshots/sponsored-brands-snapshot-operation'
import { SponsoredProductsSnapshotOperation } from './operations/snapshots/sponsored-products-snapshot-operation'
import { SponsoredDisplaySnapshotOperation } from './operations/snapshots/sponsored-display-snapshot-operation'
import { SponsoredBrandsStoresInfoOperation } from './operations/stores/sponsored-brands-stores-info-operation'
import { SponsoredDisplaySuggestedProductsOperation } from './operations/suggested-products/sponsored-display-suggested-products-operation'
import { SponsoredBrandsMediaOperation } from './operations/media/sponsored-brands-media-operation'
import { Marketplace } from './maketplace'

export class AmazonAdvertising {
  private operationProvider: OperationProvider

  constructor(
    private marketplace: Marketplace,
    private auth: HttpClientAuth,
  ) {
    const httpClient: HttpClient = new HttpClient(marketplace.advertising.region.endpoint, auth)
    this.operationProvider = new OperationProvider(httpClient)
  }

  @LazyGetter()
  get sponsoredBrandsAdGroup() {
    return this.operationProvider.create(SponsoredBrandsAdGroupOperation)
  }

  @LazyGetter()
  get sponsoredDisplayAdGroup() {
    return this.operationProvider.create(SponsoredDisplayAdGroupOperation)
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
  get sponsoredDisplayCampaign() {
    return this.operationProvider.create(SponsoredDisplayCampaignOperation)
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
  get sponsoredDisplayProductAds() {
    return this.operationProvider.create(SponsoredDisplayProductAdsOperation)
  }

  @LazyGetter()
  get sponsoredProductsProductAds() {
    return this.operationProvider.create(SponsoredProductsProductAdsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsNegativeTargeting() {
    return this.operationProvider.create(SponsoredBrandsNegativeTargetingOperation)
  }

  @LazyGetter()
  get sponsoredBrandsProductTargeting() {
    return this.operationProvider.create(SponsoredBrandsProductTargetingOperation)
  }

  @LazyGetter()
  get sponsoredDisplayNegativeTargeting() {
    return this.operationProvider.create(SponsoredDisplayNegativeTargetingOperation)
  }

  @LazyGetter()
  get sponsoredProductsNegativeTargeting() {
    return this.operationProvider.create(SponsoredProductsNegativeTargetingOperation)
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
  get testAccount() {
    return this.operationProvider.create(TestAccountOperation)
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
  get sponsoredDisplayReport() {
    return this.operationProvider.create(SponsoredDisplayReportOperation)
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
  get sponsoredDisplaySnapshot() {
    return this.operationProvider.create(SponsoredDisplaySnapshotOperation)
  }

  @LazyGetter()
  get sponsoredBrandsStoresInfo() {
    return this.operationProvider.create(SponsoredBrandsStoresInfoOperation)
  }

  @LazyGetter()
  get sponsoredDisplaySuggestedProducts() {
    return this.operationProvider.create(SponsoredDisplaySuggestedProductsOperation)
  }

  @LazyGetter()
  get sponsoredBrandsMedia() {
    return this.operationProvider.create(SponsoredBrandsMediaOperation)
  }
}
