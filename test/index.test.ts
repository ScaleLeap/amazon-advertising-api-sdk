import * as index from '../src/index'
import * as entrypointClass from '../src/amazon-advertising'
import * as adGroupTypes from '../src/operations/ad-groups/types'
import { CampaignBiddingAdjustmentsPredicate } from '../src/operations/bidding/campaign-bidding-adjustments-predicate'
import { CampaignBiddingStrategy } from '../src/operations/bidding/campaign-bidding-strategy'
import * as biddingTypes from '../src/operations/bidding/types'
import * as campaignTypes from '../src/operations/campaigns/types'
import { BudgetType } from '../src/operations/drafts/types'
import * as keywordTypes from '../src/operations/keywords/types'
import * as portfolioTypes from '../src/operations/portfolios/types'
import * as productAdsTypes from '../src/operations/product-ads/types'
import * as productTargetingTypes from '../src/operations/product-targeting/types'
import * as profileTypes from '../src/operations/profiles/types'
import * as recommendationTypes from '../src/operations/recommendations/types'
import * as reportTypes from '../src/operations/reports/index'
import * as snapshotTypes from '../src/operations/snapshots/types'

describe('index', () => {
  describe('amazon advertising', () => {
    it('should export main entry class', () => {
      expect(index.AmazonAdvertising).toEqual(entrypointClass.AmazonAdvertising)
    })
  })

  describe('ad group', () => {
    it('should export all enums', () => {
      expect(index.AdGroupState).toEqual(adGroupTypes.AdGroupState)
      expect(index.AdGroupResponseStatus).toEqual(adGroupTypes.AdGroupResponseStatus)
      expect(index.AdGroupServingStatus).toEqual(adGroupTypes.AdGroupServingStatus)
    })
  })

  describe('bidding', () => {
    it('should export all enums', () => {
      expect(index.CampaignBiddingAdjustmentsPredicate).toEqual(CampaignBiddingAdjustmentsPredicate)
      expect(index.CampaignBiddingStrategy).toEqual(CampaignBiddingStrategy)
      expect(index.BiddingAutoPredicateType).toEqual(biddingTypes.BiddingAutoPredicateType)
      expect(index.BiddingKeywordPredicateType).toEqual(biddingTypes.BiddingKeywordPredicateType)
      expect(index.BiddingProductPredicateType).toEqual(biddingTypes.BiddingProductPredicateType)
      expect(index.KeywordBidRecommendationsMatchType).toEqual(
        biddingTypes.KeywordBidRecommendationsMatchType,
      )
    })
  })

  describe('campaigns', () => {
    it('should export all enums', () => {
      expect(index.CampaignServingStatus).toEqual(campaignTypes.CampaignServingStatus)
      expect(index.CampaignState).toEqual(campaignTypes.CampaignState)
      expect(index.CampaignTargetingType).toEqual(campaignTypes.CampaignTargetingType)
      expect(index.CampaignType).toEqual(campaignTypes.CampaignType)
    })
  })

  describe('draft', () => {
    it('should export all enums', () => {
      expect(index.BudgetType).toEqual(BudgetType)
    })
  })

  describe('keyword', () => {
    it('should export all enums', () => {
      expect(index.CampaignNegativeKeywordMatchType).toEqual(
        keywordTypes.CampaignNegativeKeywordMatchType,
      )
      expect(index.CampaignNegativeKeywordResponseStatus).toEqual(
        keywordTypes.CampaignNegativeKeywordResponseStatus,
      )
      expect(index.CampaignNegativeKeywordServingStatus).toEqual(
        keywordTypes.CampaignNegativeKeywordServingStatus,
      )
      expect(index.CampaignNegativeKeywordState).toEqual(keywordTypes.CampaignNegativeKeywordState)
      expect(index.KeywordMatchType).toEqual(keywordTypes.KeywordMatchType)
      expect(index.KeywordResponseStatus).toEqual(keywordTypes.KeywordResponseStatus)
      expect(index.KeywordServingStatus).toEqual(keywordTypes.KeywordServingStatus)
      expect(index.KeywordState).toEqual(keywordTypes.KeywordState)
      expect(index.NegativeKeywordMatchType).toEqual(keywordTypes.NegativeKeywordMatchType)
      expect(index.NegativeKeywordResponseStatus).toEqual(
        keywordTypes.NegativeKeywordResponseStatus,
      )
      expect(index.NegativeKeywordServingStatus).toEqual(keywordTypes.NegativeKeywordServingStatus)
      expect(index.NegativeKeywordState).toEqual(keywordTypes.NegativeKeywordState)
      expect(index.SponsoredBrandsKeywordState).toEqual(keywordTypes.SponsoredBrandsKeywordState)
      expect(index.SponsoredBrandsNegativeKeywordState).toEqual(
        keywordTypes.SponsoredBrandsNegativeKeywordState,
      )
      expect(index.SuggestBids).toEqual(keywordTypes.SuggestBids)
    })
  })

  describe('portfolio', () => {
    it('should export all enums', () => {
      expect(index.PortfolioState).toEqual(portfolioTypes.PortfolioState)
      expect(index.PortfolioResponseStatus).toEqual(portfolioTypes.PortfolioResponseStatus)
    })
  })

  describe('product ads', () => {
    it('should export all enums', () => {
      expect(index.ProductAdServingStatus).toEqual(productAdsTypes.ProductAdServingStatus)
      expect(index.ProductAdState).toEqual(productAdsTypes.ProductAdState)
    })
  })

  describe('product targeting', () => {
    it('should export all enums', () => {
      expect(index.ExpressionType).toEqual(productTargetingTypes.ExpressionType)
      expect(index.SponsoredBrandsProductPredicateType).toEqual(
        productTargetingTypes.SponsoredBrandsProductPredicateType,
      )
      expect(index.SponsoredBrandsExpressionState).toEqual(
        productTargetingTypes.SponsoredBrandsExpressionState,
      )
      expect(index.SponsoredBrandsFilterType).toEqual(
        productTargetingTypes.SponsoredBrandsFilterType,
      )
      expect(index.SponsoredBrandsNegativeExpressionType).toEqual(
        productTargetingTypes.SponsoredBrandsNegativeExpressionType,
      )
      expect(index.SponsoredBrandsTargetState).toEqual(
        productTargetingTypes.SponsoredBrandsTargetState,
      )
      expect(index.TargetingClauseServingStatus).toEqual(
        productTargetingTypes.TargetingClauseServingStatus,
      )
      expect(index.TargetingClauseState).toEqual(productTargetingTypes.TargetingClauseState)
      expect(index.TargetingExpressionType).toEqual(productTargetingTypes.TargetingExpressionType)
    })
  })

  describe('profile', () => {
    it('should export all enums', () => {
      expect(index.AccountInfoType).toEqual(profileTypes.AccountInfoType)
      expect(index.RegisterProfileResponseStatus).toEqual(
        profileTypes.RegisterProfileResponseStatus,
      )
    })
  })

  describe('recommendation', () => {
    it('should export all enums', () => {
      expect(index.SponsoredBrandsKeywordExpressionType).toEqual(
        recommendationTypes.SponsoredBrandsKeywordExpressionType,
      )
      expect(index.SponsoredBrandsProductRecommendationFilterType).toEqual(
        recommendationTypes.SponsoredBrandsProductRecommendationFilterType,
      )
    })
  })

  describe('report', () => {
    it('should export all enums', () => {
      expect(index.SponsoredProductsAdGroupReportMetrics).toEqual(
        reportTypes.SponsoredProductsAdGroupReportMetrics,
      )
      expect(index.SponsoredProductsAsinsReportMetrics).toEqual(
        reportTypes.SponsoredProductsAsinsReportMetrics,
      )
      expect(index.SponsoredProductsCampaignReportMetrics).toEqual(
        reportTypes.SponsoredProductsCampaignReportMetrics,
      )
      expect(index.SponsoredProductsKeywordReportMetrics).toEqual(
        reportTypes.SponsoredProductsKeywordReportMetrics,
      )
      expect(index.SponsoredProductsProductAdsReportMetrics).toEqual(
        reportTypes.SponsoredProductsProductAdsReportMetrics,
      )
      expect(index.SponsoredProductsProductTargetingReportMetrics).toEqual(
        reportTypes.SponsoredProductsProductTargetingReportMetrics,
      )
      expect(index.ReportResponseStatus).toEqual(reportTypes.ReportResponseStatus)
      expect(index.ReportSegments).toEqual(reportTypes.ReportSegments)
      expect(index.SponsoredBrandsReportType).toEqual(reportTypes.SponsoredBrandsReportType)
      expect(index.SponsoredProductsReportType).toEqual(reportTypes.SponsoredProductsReportType)
      expect(index.SponsoredBrandsAdGroupReportMetrics).toEqual(
        reportTypes.SponsoredBrandsAdGroupReportMetrics,
      )
      expect(index.SponsoredBrandsCampaignReportMetrics).toEqual(
        reportTypes.SponsoredBrandsCampaignReportMetrics,
      )
      expect(index.SponsoredBrandsHeadlineSearchReportMetrics).toEqual(
        reportTypes.SponsoredBrandsHeadlineSearchReportMetrics,
      )
      expect(index.SponsoredBrandsKeywordReportMetrics).toEqual(
        reportTypes.SponsoredBrandsKeywordReportMetrics,
      )
      expect(index.SponsoredBrandsTargetReportMetrics).toEqual(
        reportTypes.SponsoredBrandsTargetReportMetrics,
      )
    })
  })

  describe('snapshot', () => {
    it('should export all enums', () => {
      expect(index.SponsoredProductsRecordType).toEqual(snapshotTypes.SponsoredProductsRecordType)
      expect(index.SponsoredBrandsRecordType).toEqual(snapshotTypes.SponsoredBrandsRecordType)
      expect(index.SnapshotState).toEqual(snapshotTypes.SnapshotState)
      expect(index.SponsoredBrandsRecordType).toEqual(snapshotTypes.SponsoredBrandsRecordType)
    })
  })
})
