import * as t from 'io-ts'
import { createEnumType } from '../commons/types'
import { BrandId, SponsoredBrandsExpressions } from '../product-targeting/types'
import { CampaignId } from '../campaigns/types'
import { KeywordMatchType } from '../keywords/types'

export enum SponsoredBrandsProductRecommendationFilterTypeEnum {
  ASINS = 'ASINS',
}
export const SponsoredBrandsProductRecommendationFilterType = createEnumType<
  SponsoredBrandsProductRecommendationFilterTypeEnum
>(SponsoredBrandsProductRecommendationFilterTypeEnum)

export const SponsoredBrandsProductRecommendationsRequest = t.strict({
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
      filterType: SponsoredBrandsProductRecommendationFilterType,
      values: t.array(t.string),
    }),
  ),
})
export type SponsoredBrandsProductRecommendationsRequest = t.TypeOf<
  typeof SponsoredBrandsProductRecommendationsRequest
>

export const SponsoredBrandsProductRecommendationsResponse = t.strict({
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
export type SponsoredBrandsProductRecommendationsResponse = t.TypeOf<
  typeof SponsoredBrandsProductRecommendationsResponse
>

export const SponsoredBrandsCategoryRecommendationsRequest = t.strict({
  /**
   * A list of ASINs.
   */
  asins: t.array(t.string),
})
export type SponsoredBrandsCategoryRecommendationsRequest = t.TypeOf<
  typeof SponsoredBrandsCategoryRecommendationsRequest
>

export const SponsoredBrandsCategoryId = t.number
export type SponsoredBrandsCategoryId = t.TypeOf<typeof SponsoredBrandsCategoryId>

const SponsoredBrandsCategoryResponse = t.strict({
  /**
   * The category identifier.
   */
  id: SponsoredBrandsCategoryId,

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

export const SponsoredBrandsCategoryRecommendationsResponse = t.strict({
  categoryRecommendationResults: t.array(SponsoredBrandsCategoryResponse),
})
export type SponsoredBrandsCategoryRecommendationsResponse = t.TypeOf<
  typeof SponsoredBrandsCategoryRecommendationsResponse
>

export const SponsoredBrandsBrandRecommendationsRequest = t.partial({
  /**
   * The category identifier for which to get recommendations.
   */
  categoryId: SponsoredBrandsCategoryId,

  /**
   * The keyword for which to get recommendations.
   */
  keyword: t.string,
})
export type SponsoredBrandsBrandRecommendationsRequest = t.TypeOf<
  typeof SponsoredBrandsBrandRecommendationsRequest
>

const SponsoredBrandsBrandResponse = t.strict({
  /**
   * The Brand identifier.
   */
  id: BrandId,

  /**
   * The Brand name
   */
  name: t.string,
})

export const SponsoredBrandsBrandRecommendationsResponse = t.strict({
  brandRecommendationResults: t.array(SponsoredBrandsBrandResponse),
})
export type SponsoredBrandsBrandRecommendationsResponse = t.TypeOf<
  typeof SponsoredBrandsBrandRecommendationsResponse
>

/**
 * Bid recommendations types
 */

const SponsoredBrandsBidRecommendationKeyword = t.strict({
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

const SponsoredBrandsRecommendedBid = t.strict({
  rangeStart: t.number,

  rangeEnd: t.number,

  recommended: t.number,
})

export enum SponsoredBrandsKeywordExpressionTypeEnum {
  BROAD = 'broad',
  EXACT = 'exact',
  PHRASE = 'phrase',
}
export const SponsoredBrandsKeywordExpressionType = createEnumType<
  SponsoredBrandsKeywordExpressionTypeEnum
>(SponsoredBrandsKeywordExpressionTypeEnum)

export const RecommendationId = t.string
export type RecommendationId = t.TypeOf<typeof RecommendationId>

export const SponsoredBrandsBidsRecommendationRequest = t.strict({
  /**
   * The identifier of the campaign for which bid recommendations are created.
   */
  campaignId: CampaignId,

  targets: SponsoredBrandsExpressions,

  keywords: t.array(SponsoredBrandsBidRecommendationKeyword),
})
export type SponsoredBrandsBidsRecommendationRequest = t.TypeOf<
  typeof SponsoredBrandsBidsRecommendationRequest
>

export const SponsoredBrandsBidsRecommendationResponse = t.strict({
  /**
   * Lists the bid recommendations for the keywords specified in the request.
   */
  keywordsBidsRecommendationSuccessResults: t.array(
    t.strict({
      /**
       * The identifier of the keyword bid recommendation.
       */
      recommendationId: RecommendationId,

      recommendedBid: SponsoredBrandsRecommendedBid,

      keyword: SponsoredBrandsBidRecommendationKeyword,

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
        type: SponsoredBrandsKeywordExpressionType,
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

      recommendedBid: SponsoredBrandsRecommendedBid,

      targets: SponsoredBrandsExpressions,

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

      targets: SponsoredBrandsExpressions,

      /**
       * Correlates the keyword to the keyword array index specified in the request. Zero-based.
       */
      targetsIndex: t.number,
    }),
  ),
})
export type SponsoredBrandsBidsRecommendationResponse = t.TypeOf<
  typeof SponsoredBrandsBidsRecommendationResponse
>
