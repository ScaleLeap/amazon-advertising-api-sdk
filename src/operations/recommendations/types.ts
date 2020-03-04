import * as t from 'io-ts'
import { createEnumType } from '../commons/types'
import { BrandId, SBExpressions } from '../product-targeting/types'
import { CampaignId } from '../campaigns/types'
import { KeywordMatchType } from '../keywords/types'

export enum SBProductRecommendationFilterTypeEnum {
  ASINS = 'ASINS',
}
export const SBProductRecommendationFilterType = createEnumType<
  SBProductRecommendationFilterTypeEnum
>(SBProductRecommendationFilterTypeEnum)

export const SBProductRecommendationsRequest = t.strict({
  /**
   * Operations that return paginated results include a pagination token in this field.
   * To retrieve the next page of results, call the same operation and specify this token in the request.
   * If the NextToken field is empty, there are no further results.
   */
  nextToken: t.string,

  /**
   * Sets a limit on the number of results returned by an operation.
   */
  maxResults: t.number,

  /**
   * Restricts recommendations to the criteria specified in the filters.
   */
  filters: t.array(
    t.strict({
      filterType: SBProductRecommendationFilterType,
      values: t.array(t.string),
    }),
  ),
})
export type SBProductRecommendationsRequest = t.TypeOf<typeof SBProductRecommendationsRequest>

export const SBProductRecommendationsResponse = t.strict({
  /**
   * Operations that return paginated results include a pagination token in this field.
   * To retrieve the next page of results, call the same operation and specify this token in the request.
   * If the NextToken field is empty, there are no further results.
   */
  nextToken: t.string,

  recommendedProducts: t.array(
    t.strict({
      /**
       * The recommended target ASIN.
       */
      recommendedTargetAsin: t.string,
    }),
  ),
})
export type SBProductRecommendationsResponse = t.TypeOf<typeof SBProductRecommendationsResponse>

export const SBCategoryRecommendationsRequest = t.strict({
  /**
   * A list of ASINs.
   */
  asins: t.array(t.string),
})
export type SBCategoryRecommendationsRequest = t.TypeOf<typeof SBCategoryRecommendationsRequest>

export const CategoryId = t.number
export type CategoryId = t.TypeOf<typeof CategoryId>

const SBCategoryResponse = t.strict({
  /**
   * The category identifier.
   */
  id: CategoryId,

  /**
   * The category name.
   */
  name: t.string,

  /**
   * Set to true if the category can be targeted in a targeting expression, and false if not.
   */
  isTargetable: t.boolean,

  /**
   * The path of the category within the category catalogue.
   */
  path: t.string,
})

export const SBCategoryRecommendationsResponse = t.strict({
  categoryRecommendationResults: t.array(SBCategoryResponse),
})
export type SBCategoryRecommendationsResponse = t.TypeOf<typeof SBCategoryRecommendationsResponse>

export const SBBrandRecommendationsRequest = t.partial({
  /**
   * The category identifier for which to get recommendations.
   */
  categoryId: CategoryId,

  /**
   * The keyword for which to get recommendations.
   */
  keyword: t.string,
})
export type SBBrandRecommendationsRequest = t.TypeOf<typeof SBBrandRecommendationsRequest>

const SBBrandResponse = t.strict({
  /**
   * The Brand identifier.
   */
  id: BrandId,

  /**
   * The Brand name
   */
  name: t.string,
})

export const SBBrandRecommendationsResponse = t.strict({
  brandRecommendationResults: t.array(SBBrandResponse),
})
export type SBBrandRecommendationsResponse = t.TypeOf<typeof SBBrandRecommendationsResponse>

/**
 * Bid recommendations types
 */

const SBBidRecommendationKeyword = t.strict({
  /**
   * The match type.
   * For more information, see match types in the Amazon Advertising support center.
   */
  matchType: KeywordMatchType,

  /**
   * The text of the keyword. Maximum of 10 words.
   */
  keywordText: t.string,
})

const SBRecommendedBid = t.strict({
  rangeStart: t.number,

  rangeEnd: t.number,

  recommended: t.number,
})

export enum SBKeywordExpressionTypeEnum {
  BROAD = 'broad',
  EXACT = 'exact',
  PHRASE = 'phrase',
}
export const SBKeywordExpressionType = createEnumType<SBKeywordExpressionTypeEnum>(
  SBKeywordExpressionTypeEnum,
)

export const RecommendationId = t.string
export type RecommendationId = t.TypeOf<typeof RecommendationId>

export const SBBidsRecommendationRequest = t.strict({
  /**
   * The identifier of the campaign for which bid recommendations are created.
   */
  campaignId: CampaignId,

  targets: SBExpressions,

  keywords: t.array(SBBidRecommendationKeyword),
})
export type SBBidsRecommendationRequest = t.TypeOf<typeof SBBidsRecommendationRequest>

export const SBBidsRecommendationResponse = t.strict({
  /**
   * Lists the bid recommendations for the keywords specified in the request.
   */
  keywordsBidsRecommendationSuccessResults: t.array(
    t.strict({
      /**
       * The identifier of the keyword bid recommendation.
       */
      recommendationId: RecommendationId,

      recommendedBid: SBRecommendedBid,

      keyword: SBBidRecommendationKeyword,

      keywordIndex: t.number,
    }),
  ),

  /**
   * Lists errors that occured during creation of keyword bid recommendations.
   */
  keywordsBidsRecommendationErrorResults: t.array(
    t.strict({
      code: t.string,

      details: t.string,

      keyword: t.strict({
        /**
         * The text of the keyword. Maximum of 10 words.
         */
        value: t.string,

        /**
         * The match type. For more information, see match types in the Amazon Advertising support center.
         */
        type: SBKeywordExpressionType,
      }),

      keywordIndex: t.number,
    }),
  ),

  /**
   * Lists the bid recommendations for the keywords or targets specified in the request.
   */
  targetsBidsRecommendationSuccessResults: t.array(
    t.strict({
      /**
       * The identifier of the target bid recommendation.
       */
      recommendationId: RecommendationId,

      recommendedBid: SBRecommendedBid,

      targets: SBExpressions,

      /**
       * Correlates the keyword to the keyword array index specified in the request. Zero-based.
       */
      targetsIndex: t.number,
    }),
  ),

  /**
   * Lists errors that occured during creation of target bid recommendations.
   */
  targetsBidsRecommendationErrorResults: t.array(
    t.strict({
      code: t.string,

      details: t.string,

      targets: SBExpressions,

      /**
       * Correlates the keyword to the keyword array index specified in the request. Zero-based.
       */
      targetsIndex: t.number,
    }),
  ),
})
export type SBBidsRecommendationResponse = t.TypeOf<typeof SBBidsRecommendationResponse>
