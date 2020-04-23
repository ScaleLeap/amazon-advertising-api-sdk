import * as t from 'io-ts'
import { KeywordId } from '../keywords/types'
import { AdGroupId } from '../ad-groups/types'

export const KeywordBidRecommendationsMatchType = t.union([
  t.literal('exact'),
  t.literal('phrase'),
  t.literal('broad'),
])
export type KeywordBidRecommendationsMatchType = t.TypeOf<typeof KeywordBidRecommendationsMatchType>

/**
 * The resulting status code for retrieving the bid.
 */
export const BidRecommendationsResponseCode = t.union([
  t.literal('SUCCESS'),
  t.literal('INVALID_ARGUMENT'),
  t.literal('NOT_FOUND'),
  t.literal('INTERNAL_ERROR'),
  t.literal('SERVER_IS_BUSY'),
  t.literal('UNAUTHORIZED'),
])
export type BidRecommendationsResponseCode = t.TypeOf<typeof BidRecommendationsResponseCode>

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
  adGroupId: AdGroupId,

  /**
   * Suggested Bid
   */
  suggestedBid: SuggestedBid,
})
export type AdGroupBidRecommendationsResponse = t.TypeOf<typeof AdGroupBidRecommendationsResponse>

export const KeywordBidRecommendationsResponse = t.intersection([
  AdGroupBidRecommendationsResponse,

  t.strict({
    keywordId: KeywordId,
  }),
])
export type KeywordBidRecommendationsResponse = t.TypeOf<typeof KeywordBidRecommendationsResponse>

export const KeywordBidRecommendationsData = t.strict({
  /**
   * The ID of the ad group that a bid was requested for.
   */
  adGroupId: AdGroupId,

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
  adGroupId: AdGroupId,

  recommendations: t.array(
    t.intersection([
      t.strict({
        /**
         * The resulting status code for retrieving the bid.
         */
        code: BidRecommendationsResponseCode,

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
export const BiddingKeywordPredicateType = t.union([
  t.literal('queryBroadMatches'),
  t.literal('queryPhraseMatches'),
  t.literal('queryExactMatches'),
])
export type BiddingKeywordPredicateType = t.TypeOf<typeof BiddingKeywordPredicateType>

/**
 * Product Predicate Type
 */
export const BiddingProductPredicateType = t.union([
  t.literal('asinCategorySameAs'),
  t.literal('asinBrandSameAs'),
  t.literal('asinPriceLessThan'),
  t.literal('asinPriceBetween'),
  t.literal('asinPriceGreaterThan'),
  t.literal('asinReviewRatingLessThan'),
  t.literal('asinReviewRatingBetween'),
  t.literal('asinReviewRatingGreaterThan'),
  t.literal('asinSameAs'),
])
export type BiddingProductPredicateType = t.TypeOf<typeof BiddingProductPredicateType>

/**
 * Keyword Predicate Type
 */
export const BiddingAutoPredicateType = t.union([
  t.literal('queryBroadRelMatches'),
  t.literal('queryHighRelMatches'),
  t.literal('asinSubstituteRelated'),
  t.literal('asinAccessoryRelated'),
])
export type BiddingAutoPredicateType = t.TypeOf<typeof BiddingAutoPredicateType>

/**
 * Targeting Expression
 */
export const BiddingTargetingExpression = t.strict({
  /**
   * The expression value
   */
  value: t.string,

  type: t.union([
    BiddingKeywordPredicateType,
    BiddingProductPredicateType,
    BiddingAutoPredicateType,
  ]),
})

export const BiddingTargetingExpressions = t.array(BiddingTargetingExpression)

export const BidRecommendationRequest = t.strict({
  /**
   * The adGroupId where the targeting expression exists, to generate a bid recommendation
   */
  adGroupId: AdGroupId,

  /**
   * List of targeting expressions to generate recommendations for
   */
  expressions: BiddingTargetingExpressions,
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
  expression: BiddingTargetingExpression,

  /**
   * The response code
   */
  code: BidRecommendationsResponseCode,
})

export const BidRecommendationLists = t.array(BidRecommendationList)

/**
 * Bid Recommendation for Targets Response
 */
export const BidRecommendationForTargetsResponse = t.strict({
  /**
   * The adGroup Id for the recommended bids
   */
  adGroupId: AdGroupId,

  /**
   * The bid recommendations
   */
  recommendations: BidRecommendationLists,
})
export type BidRecommendationForTargetsResponse = t.TypeOf<
  typeof BidRecommendationForTargetsResponse
>
