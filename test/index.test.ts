import * as index from '../src/index'
import * as adGroupEnums from '../src/operations/ad-groups/types'
import { CampaignBiddingAdjustmentsPredicateEnum } from '../src/operations/bidding/campaign-bidding-adjustments-predicate'
import { CampaignBiddingStrategyEnum } from '../src/operations/bidding/campaign-bidding-strategy'
import * as biddingEnums from '../src/operations/bidding/types'
import * as campaignEnums from '../src/operations/campaigns/types'
import { BudgetTypeEnum } from '../src/operations/drafts/types'
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
      expect(index.AdGroupStateEnum).toEqual(adGroupEnums.AdGroupStateEnum)
      expect(index.AdGroupResponseStatusEnum).toEqual(adGroupEnums.AdGroupResponseStatusEnum)
      expect(index.AdGroupServingStatusEnum).toEqual(adGroupEnums.AdGroupServingStatusEnum)
    })
  })

  describe('bidding', () => {
    it('should export all enums', () => {
      expect(index.CampaignBiddingAdjustmentsPredicateEnum).toEqual(
        CampaignBiddingAdjustmentsPredicateEnum,
      )
      expect(index.CampaignBiddingStrategyEnum).toEqual(CampaignBiddingStrategyEnum)
      expect(index.BidRecommendationsResponseCodeEnum).toEqual(
        biddingEnums.BidRecommendationsResponseCodeEnum,
      )
      expect(index.BiddingAutoPredicateTypeEnum).toEqual(biddingEnums.BiddingAutoPredicateTypeEnum)
      expect(index.BiddingKeywordPredicateTypeEnum).toEqual(
        biddingEnums.BiddingKeywordPredicateTypeEnum,
      )
      expect(index.BiddingProductPredicateTypeEnum).toEqual(
        biddingEnums.BiddingProductPredicateTypeEnum,
      )
      expect(index.KeywordBidRecommendationsMatchTypeEnum).toEqual(
        biddingEnums.KeywordBidRecommendationsMatchTypeEnum,
      )
    })
  })

  describe('campaigns', () => {
    it('should export all enums', () => {
      expect(index.CampaignServingStatusEnum).toEqual(campaignEnums.CampaignServingStatusEnum)
      expect(index.CampaignStateEnum).toEqual(campaignEnums.CampaignStateEnum)
      expect(index.CampaignTargetingEnum).toEqual(campaignEnums.CampaignTargetingEnum)
      expect(index.CampaignTypeEnum).toEqual(campaignEnums.CampaignTypeEnum)
    })
  })

  describe('draft', () => {
    it('should export all enums', () => {
      expect(index.BudgetTypeEnum).toEqual(BudgetTypeEnum)
    })
  })

  describe('keyword', () => {
    it('should export all enums', () => {
      expect(index.CampaignNegativeKeywordMatchTypeEnum).toEqual(
        keywordEnum.CampaignNegativeKeywordMatchTypeEnum,
      )
      expect(index.CampaignNegativeKeywordResponseStatusEnum).toEqual(
        keywordEnum.CampaignNegativeKeywordResponseStatusEnum,
      )
      expect(index.CampaignNegativeKeywordServingStatusEnum).toEqual(
        keywordEnum.CampaignNegativeKeywordServingStatusEnum,
      )
      expect(index.CampaignNegativeKeywordStateEnum).toEqual(
        keywordEnum.CampaignNegativeKeywordStateEnum,
      )
      expect(index.KeywordMatchTypeEnum).toEqual(keywordEnum.KeywordMatchTypeEnum)
      expect(index.KeywordResponseStatusEnum).toEqual(keywordEnum.KeywordResponseStatusEnum)
      expect(index.KeywordServingStatusEnum).toEqual(keywordEnum.KeywordServingStatusEnum)
      expect(index.KeywordStateEnum).toEqual(keywordEnum.KeywordStateEnum)
      expect(index.NegativeKeywordMatchTypeEnum).toEqual(keywordEnum.NegativeKeywordMatchTypeEnum)
      expect(index.NegativeKeywordResponseStatusEnum).toEqual(
        keywordEnum.NegativeKeywordResponseStatusEnum,
      )
      expect(index.NegativeKeywordServingStatusEnum).toEqual(
        keywordEnum.NegativeKeywordServingStatusEnum,
      )
      expect(index.NegativeKeywordStateEnum).toEqual(keywordEnum.NegativeKeywordStateEnum)
      expect(index.SponsoredBrandsKeywordStateEnum).toEqual(
        keywordEnum.SponsoredBrandsKeywordStateEnum,
      )
      expect(index.SponsoredBrandsNegativeKeywordStateEnum).toEqual(
        keywordEnum.SponsoredBrandsNegativeKeywordStateEnum,
      )
      expect(index.SuggestBidsEnum).toEqual(keywordEnum.SuggestBidsEnum)
    })
  })

  describe('portfolio', () => {
    it('should export all enums', () => {
      expect(index.PortfolioStateEnum).toEqual(portfolioEnum.PortfolioStateEnum)
      expect(index.PortfolioResponseStatusEnum).toEqual(portfolioEnum.PortfolioResponseStatusEnum)
    })
  })

  describe('product ads', () => {
    it('should export all enums', () => {
      expect(index.ProductAdServingStatusEnum).toEqual(productAdsEnum.ProductAdServingStatusEnum)
      expect(index.ProductAdStateEnum).toEqual(productAdsEnum.ProductAdStateEnum)
    })
  })

  describe('product targeting', () => {
    it('should export all enums', () => {
      expect(index.ExpressionTypeEnum).toEqual(productTargetingEnum.ExpressionTypeEnum)
      expect(index.ProductPredicateTypeEnum).toEqual(productTargetingEnum.ProductPredicateTypeEnum)
      expect(index.SponsoredBrandsExpressionStateEnum).toEqual(
        productTargetingEnum.SponsoredBrandsExpressionStateEnum,
      )
      expect(index.SponsoredBrandsFilterTypeEnum).toEqual(
        productTargetingEnum.SponsoredBrandsFilterTypeEnum,
      )
      expect(index.SponsoredBrandsNegativeExpressionTypeEnum).toEqual(
        productTargetingEnum.SponsoredBrandsNegativeExpressionTypeEnum,
      )
      expect(index.SponsoredBrandsTargetStateEnum).toEqual(
        productTargetingEnum.SponsoredBrandsTargetStateEnum,
      )
      expect(index.TargetingClauseServingStatusEnum).toEqual(
        productTargetingEnum.TargetingClauseServingStatusEnum,
      )
      expect(index.TargetingClauseStateEnum).toEqual(productTargetingEnum.TargetingClauseStateEnum)
      expect(index.TargetingExpressionTypeEnum).toEqual(
        productTargetingEnum.TargetingExpressionTypeEnum,
      )
    })
  })

  describe('profile', () => {
    it('should export all enums', () => {
      expect(index.AccountInfoTypeEnum).toEqual(profileEnum.AccountInfoTypeEnum)
      expect(index.RegisterProfileResponseStatusEnum).toEqual(
        profileEnum.RegisterProfileResponseStatusEnum,
      )
    })
  })

  describe('recommendation', () => {
    it('should export all enums', () => {
      expect(index.SponsoredBrandsKeywordExpressionTypeEnum).toEqual(
        recommendationEnum.SponsoredBrandsKeywordExpressionTypeEnum,
      )
      expect(index.SponsoredBrandsProductRecommendationFilterTypeEnum).toEqual(
        recommendationEnum.SponsoredBrandsProductRecommendationFilterTypeEnum,
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
