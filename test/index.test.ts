import * as index from '../src/index'
import * as adGroupEnums from '../src/operations/ad-groups/types'
import { CampaignBiddingAdjustmentsPredicateEnum } from '../src/operations/bidding/campaign-bidding-adjustments-predicate'
import { CampaignBiddingStrategyEnum } from '../src/operations/bidding/campaign-bidding-strategy'
import * as biddingEnums from '../src/operations/bidding/types'
import * as campaignEnums from '../src/operations/campaigns/types'
import { BudgetType } from '../src/operations/drafts/types'
import * as keywordEnum from '../src/operations/keywords/types'
import * as portfolioEnum from '../src/operations/portfolios/types'
import * as productAdsEnum from '../src/operations/product-ads/types'
import * as productTargetingEnum from '../src/operations/product-targeting/types'
import * as profileEnum from '../src/operations/profiles/types'
import * as recommendationEnum from '../src/operations/recommendations/types'
import * as reportEnum from '../src/operations/reports/index'
import * as snapshotEnum from '../src/operations/snapshots/types'

describe('index', () => {
  describe('ad group', () => {
    it('should export all enums', () => {
      expect(index.AdGroupState).toEqual(adGroupEnums.AdGroupState)
      expect(index.AdGroupResponseStatus).toEqual(adGroupEnums.AdGroupResponseStatus)
      expect(index.AdGroupServingStatus).toEqual(adGroupEnums.AdGroupServingStatus)
    })
  })

  describe('bidding', () => {
    it('should export all enums', () => {
      expect(index.CampaignBiddingAdjustmentsPredicateEnum).toEqual(
        CampaignBiddingAdjustmentsPredicateEnum,
      )
      expect(index.CampaignBiddingStrategyEnum).toEqual(CampaignBiddingStrategyEnum)
      expect(index.BidRecommendationsResponseCode).toEqual(
        biddingEnums.BidRecommendationsResponseCode,
      )
      expect(index.BiddingAutoPredicateType).toEqual(biddingEnums.BiddingAutoPredicateType)
      expect(index.BiddingKeywordPredicateType).toEqual(biddingEnums.BiddingKeywordPredicateType)
      expect(index.BiddingProductPredicateType).toEqual(biddingEnums.BiddingProductPredicateType)
      expect(index.KeywordBidRecommendationsMatchType).toEqual(
        biddingEnums.KeywordBidRecommendationsMatchType,
      )
    })
  })

  describe('campaigns', () => {
    it('should export all enums', () => {
      expect(index.CampaignServingStatus).toEqual(campaignEnums.CampaignServingStatus)
      expect(index.CampaignState).toEqual(campaignEnums.CampaignState)
      expect(index.CampaignTargetingType).toEqual(campaignEnums.CampaignTargetingType)
      expect(index.CampaignType).toEqual(campaignEnums.CampaignType)
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
        keywordEnum.CampaignNegativeKeywordMatchType,
      )
      expect(index.CampaignNegativeKeywordResponseStatus).toEqual(
        keywordEnum.CampaignNegativeKeywordResponseStatus,
      )
      expect(index.CampaignNegativeKeywordServingStatus).toEqual(
        keywordEnum.CampaignNegativeKeywordServingStatus,
      )
      expect(index.CampaignNegativeKeywordState).toEqual(keywordEnum.CampaignNegativeKeywordState)
      expect(index.KeywordMatchType).toEqual(keywordEnum.KeywordMatchType)
      expect(index.KeywordResponseStatus).toEqual(keywordEnum.KeywordResponseStatus)
      expect(index.KeywordServingStatus).toEqual(keywordEnum.KeywordServingStatus)
      expect(index.KeywordState).toEqual(keywordEnum.KeywordState)
      expect(index.NegativeKeywordMatchType).toEqual(keywordEnum.NegativeKeywordMatchType)
      expect(index.NegativeKeywordResponseStatus).toEqual(keywordEnum.NegativeKeywordResponseStatus)
      expect(index.NegativeKeywordServingStatus).toEqual(keywordEnum.NegativeKeywordServingStatus)
      expect(index.NegativeKeywordState).toEqual(keywordEnum.NegativeKeywordState)
      expect(index.SponsoredBrandsKeywordState).toEqual(keywordEnum.SponsoredBrandsKeywordState)
      expect(index.SponsoredBrandsNegativeKeywordState).toEqual(
        keywordEnum.SponsoredBrandsNegativeKeywordState,
      )
      expect(index.SuggestBids).toEqual(keywordEnum.SuggestBids)
    })
  })

  describe('portfolio', () => {
    it('should export all enums', () => {
      expect(index.PortfolioState).toEqual(portfolioEnum.PortfolioState)
      expect(index.PortfolioResponseStatus).toEqual(portfolioEnum.PortfolioResponseStatus)
    })
  })

  describe('product ads', () => {
    it('should export all enums', () => {
      expect(index.ProductAdServingStatus).toEqual(productAdsEnum.ProductAdServingStatus)
      expect(index.ProductAdState).toEqual(productAdsEnum.ProductAdState)
    })
  })

  describe('product targeting', () => {
    it('should export all enums', () => {
      expect(index.ExpressionType).toEqual(productTargetingEnum.ExpressionType)
      expect(index.SponsoredBrandsProductPredicateType).toEqual(
        productTargetingEnum.SponsoredBrandsProductPredicateType,
      )
      expect(index.SponsoredBrandsExpressionState).toEqual(
        productTargetingEnum.SponsoredBrandsExpressionState,
      )
      expect(index.SponsoredBrandsFilterType).toEqual(
        productTargetingEnum.SponsoredBrandsFilterType,
      )
      expect(index.SponsoredBrandsNegativeExpressionType).toEqual(
        productTargetingEnum.SponsoredBrandsNegativeExpressionType,
      )
      expect(index.SponsoredBrandsTargetState).toEqual(
        productTargetingEnum.SponsoredBrandsTargetState,
      )
      expect(index.TargetingClauseServingStatus).toEqual(
        productTargetingEnum.TargetingClauseServingStatus,
      )
      expect(index.TargetingClauseState).toEqual(productTargetingEnum.TargetingClauseState)
      expect(index.TargetingExpressionType).toEqual(productTargetingEnum.TargetingExpressionType)
    })
  })

  describe('profile', () => {
    it('should export all enums', () => {
      expect(index.AccountInfoType).toEqual(profileEnum.AccountInfoType)
      expect(index.RegisterProfileResponseStatus).toEqual(profileEnum.RegisterProfileResponseStatus)
    })
  })

  describe('recommendation', () => {
    it('should export all enums', () => {
      expect(index.SponsoredBrandsKeywordExpressionType).toEqual(
        recommendationEnum.SponsoredBrandsKeywordExpressionType,
      )
      expect(index.SponsoredBrandsProductRecommendationFilterType).toEqual(
        recommendationEnum.SponsoredBrandsProductRecommendationFilterType,
      )
    })
  })

  describe('report', () => {
    it('should export all enums', () => {
      expect(index.AdGroupReportMetricsEnum).toEqual(reportEnum.AdGroupReportMetricsEnum)
      expect(index.AsinsReportMetricsEnum).toEqual(reportEnum.AsinsReportMetricsEnum)
      expect(index.CampaignReportMetricsEnum).toEqual(reportEnum.CampaignReportMetricsEnum)
      expect(index.KeywordReportMetricsEnum).toEqual(reportEnum.KeywordReportMetricsEnum)
      expect(index.ProductAdsReportMetricsEnum).toEqual(reportEnum.ProductAdsReportMetricsEnum)
      expect(index.ProductTargetingReportMetricsEnum).toEqual(
        reportEnum.ProductTargetingReportMetricsEnum,
      )
      expect(index.ReportResponseStatusEnum).toEqual(reportEnum.ReportResponseStatusEnum)
      expect(index.ReportSegmentsEnum).toEqual(reportEnum.ReportSegmentsEnum)
      expect(index.SponsoredBrandsReportTypeEnum).toEqual(reportEnum.SponsoredBrandsReportTypeEnum)
      expect(index.SponsoredProductsReportTypeEnum).toEqual(
        reportEnum.SponsoredProductsReportTypeEnum,
      )
      expect(index.ReportResponseStatusType).toEqual(reportEnum.ReportResponseStatusType)
      expect(index.HeadlineSearchReportMetricsEnum).toEqual(
        reportEnum.HeadlineSearchReportMetricsEnum,
      )
    })
  })

  describe('snapshot', () => {
    it('should export all enums', () => {
      expect(index.RecordTypeEnum).toEqual(snapshotEnum.RecordTypeEnum)
      expect(index.RecordTypeRequestEnum).toEqual(snapshotEnum.RecordTypeRequestEnum)
      expect(index.SnapshotStateEnum).toEqual(snapshotEnum.SnapshotStateEnum)
      expect(index.SnapshotStatusEnum).toEqual(snapshotEnum.SnapshotStatusEnum)
      expect(index.SponsoredBrandsRecordTypeEnum).toEqual(
        snapshotEnum.SponsoredBrandsRecordTypeEnum,
      )
    })
  })
})
