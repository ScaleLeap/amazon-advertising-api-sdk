import * as t from 'io-ts'
import { createEnumType } from '../commons/types'

export enum KeywordBidRecommendationsMatchTypeEnum {
  EXACT = 'exact',
  PHRASE = 'phrase',
  BROAD = 'broad',
}
export const KeywordBidRecommendationsMatchType = createEnumType<
  KeywordBidRecommendationsMatchTypeEnum
>(KeywordBidRecommendationsMatchTypeEnum)

/**
 * The resulting status code for retrieving the bid.
 */
export enum BidRecommendationsResponseCodeEnum {
  SUCCESS = 'SUCCESS',
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  SERVER_IS_BUSY = 'SERVER_IS_BUSY',
  UNAUTHORIZED = 'UNAUTHORIZED',
}
export const BidRecommendationsResponseCodeType = createEnumType<
  BidRecommendationsResponseCodeEnum
>(BidRecommendationsResponseCodeEnum)

export const BidRecommendationsKeyword = t.strict({
  /**
   * The keyword text.
   */
  keyword: t.string,

  /**
   * The match type used to match the keyword to search query.
   */
  matchType: KeywordBidRecommendationsMatchType,
})

export const BidRecommendationsKeywords = t.array(BidRecommendationsKeyword)

export const SuggestedBid = t.strict({
  /**
   * The bid range start
   */
  rangeStart: t.number,

  /**
   * The bid range end
   */
  rangeEnd: t.number,

  /**
   * The suggested bid
   */
  suggested: t.number,
})
export type SuggestedBid = t.TypeOf<typeof SuggestedBid>

export const AdGroupBidRecommendationsResponse = t.strict({
  /**
   * The ID of the ad group that a bid was requested for.
   */
  adGroupId: t.number, // TODO: Change to AdGroupId type

  /**
   * Suggested Bid
   */
  suggestedBid: SuggestedBid,
})
export type AdGroupBidRecommendationsResponse = t.TypeOf<typeof AdGroupBidRecommendationsResponse>

export const KeywordBidRecommendationsResponse = t.intersection([
  AdGroupBidRecommendationsResponse,

  t.strict({
    keywordId: t.number, // TODO: Change to KeywordId type
  }),
])
export type KeywordBidRecommendationsResponse = t.TypeOf<typeof KeywordBidRecommendationsResponse>

export const KeywordBidRecommendationsData = t.strict({
  /**
   * The ID of the ad group that a bid was requested for.
   */
  adGroupId: t.number, // TODO: Change to AdGroupId type

  /**
   * Suggested Bid
   */
  keywords: BidRecommendationsKeywords,
})
export type KeywordBidRecommendationsData = t.TypeOf<typeof KeywordBidRecommendationsData>

export const BidRecommendationsResponse = t.strict({
  /**
   * The ID of the ad group that a bid was requested for.
   */
  adGroupId: t.number, // TODO: Change to AdGroupId type

  recommendations: t.array(
    t.intersection([
      t.strict({
        /**
         * The resulting status code for retrieving the bid.
         */
        code: BidRecommendationsResponseCodeType,

        suggestedBid: SuggestedBid,
      }),

      BidRecommendationsKeyword,
    ]),
  ),
})
export type BidRecommendationsResponse = t.TypeOf<typeof BidRecommendationsResponse>

/**
 * Keyword Predicate Type
 */
export enum KeywordPredicateTypeEnum {
  QUERY_BROAD_MATCHES = 'queryBroadMatches',
  QUERY_PHRASE_MATCHES = 'queryPhraseMatches',
  QUERY_EXACT_MATCHES = 'queryExactMatches',
}
export const KeywordPredicateType = createEnumType<KeywordPredicateTypeEnum>(
  KeywordPredicateTypeEnum,
)

/**
 * Product Predicate Type
 */
export enum ProductPredicateTypeEnum {
  ASIN_CATEGORY_SAME_AS = 'asinCategorySameAs',
  ASIN_BRAND_SAME_AS = 'asinBrandSameAs',
  ASIN_PRICE_LESS_THAN = 'asinPriceLessThan',
  ASIN_PRICE_BETWEEN = 'asinPriceBetween',
  ASIN_PRICE_GREATER_THAN = 'asinPriceGreaterThan',
  ASIN_REVIEW_RATING_LESS_THAN = 'asinReviewRatingLessThan',
  ASIN_REVIEW_RATING_BETWEEN = 'asinReviewRatingBetween',
  ASIN_REVIEW_RATING_GREATER_THAN = 'asinReviewRatingGreaterThan',
  ASIN_SAME_AS = 'asinSameAs',
}
export const ProductPredicateType = createEnumType<ProductPredicateTypeEnum>(
  ProductPredicateTypeEnum,
)

/**
 * Keyword Predicate Type
 */
export enum AutoPredicateTypeEnum {
  QUERY_BROAD_REL_MATCHES = 'queryBroadRelMatches',
  QUERY_HIGH_REL_MATCHES = 'queryHighRelMatches',
  ASIN_SUBSTITUTE_RELATED = 'asinSubstituteRelated',
}
export const AutoPredicateType = createEnumType<AutoPredicateTypeEnum>(AutoPredicateTypeEnum)

/**
 * Targeting Expression
 */
export const TargetingExpression = t.strict({
  /**
   * The expression value
   */
  value: t.string,

  type: t.union([KeywordPredicateType, ProductPredicateType, AutoPredicateType]),
})

export const TargetingExpressions = t.array(TargetingExpression)

export const BidRecommendationRequest = t.strict({
  /**
   * The adGroupId where the targeting expression exists, to generate a bid recommendation
   */
  adGroupId: t.number, // TODO: Change to AdGroupId type

  /**
   * List of targeting expressions to generate recommendations for
   */
  expressions: TargetingExpressions,
})
export type BidRecommendationRequest = t.TypeOf<typeof BidRecommendationRequest>

export const BidRecommendationList = t.strict({
  /**
   * The suggested bid
   */
  suggestedBid: SuggestedBid,

  /**
   * The targeting expression
   */
  expression: TargetingExpression,

  /**
   * The response code
   */
  code: BidRecommendationsResponseCodeType,
})

export const BidRecommendationLists = t.array(BidRecommendationList)

/**
 * Bid Recommendation for Targets Response
 */
export const BidRecommendationForTargetsResponse = t.strict({
  /**
   * The adGroup Id for the recommended bids
   */
  adGroupId: t.number, // TODO: Change to AdGroupId type

  /**
   * The bid recommendations
   */
  recommendations: BidRecommendationLists,
})
