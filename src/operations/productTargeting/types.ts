import * as t from 'io-ts'
import { createEnumType, ListPagination } from '../commons/types'
import { CampaignId, CampaignIds } from '../campaigns/types'
import { AdGroupId, AdGroupIds } from '../adGroups/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const TargetId = t.number
export type TargetId = t.TypeOf<typeof TargetId>

export const TargetIds = t.array(TargetId)
export type TargetIds = t.TypeOf<typeof TargetIds>

export enum TargetingClauseStateEnum {
  ENABLED = 'enabled',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}
export const TargetingClauseStateType = createEnumType<TargetingClauseStateEnum>(
  TargetingClauseStateEnum,
)

export enum TargetingExpressionTypeEnum {
  ASIN_CATEGORY_SAME_AS = 'asinCategorySameAs',
  ASIN_BRAND_SAME_AS = 'asinBrandSameAs',
  ASIN_PRICE_LESS_THAN = 'asinPriceLessThan',
  ASIN_PRICE_BETWEEN = 'asinPriceBetween',
  ASIN_PRICE_GREATER_THAN = 'asinPriceGreaterThan',
  ASIN_REVIEW_RATING_LESS_THAN = 'asinReviewRatingLessThan',
  ASIN_REVIEW_RATING_BETWEEN = 'asinReviewRatingBetween',
  ASIN_REVIEW_RATING_GREATER_THAN = 'asinReviewRatingGreaterThan',
  ASIN_SAME_AS = 'asinSameAs',
  ASIN_IS_PRIME_SHIPPING_ELIGIBLE = 'asinIsPrimeShippingEligible',
  ASIN_AGE_RANGE_SAME_AS = 'asinAgeRangeSameAs',
  ASIN_GENRE_SAME_AS = 'asinGenreSameAs',
  QUERY_HIGH_REL_MATCHES = 'queryHighRelMatches',
  QUERY_BROAD_REL_MATCHES = 'queryBroadRelMatches',
  ASIN_SUBSTITUTE_RELATED = 'asinSubstituteRelated',
  ASIN_ACCESSORY_RELATED = 'asinAccessoryRelated',
}
export const TargetingExpressionType = createEnumType<TargetingExpressionTypeEnum>(
  TargetingExpressionTypeEnum,
)

export const TargetingExpression = t.intersection([
  t.strict({
    /**
     * The type of intent
     */
    type: TargetingExpressionType,
  }),
  t.partial({
    /**
     * The value which should be targeted
     */
    value: t.string,
  }),
])

export type TargetingExpression = t.TypeOf<typeof TargetingExpression>

export const TargetingExpressions = t.array(TargetingExpression)
export type TargetingExpressions = t.TypeOf<typeof TargetingExpressions>

export enum ExpressionTypeEnum {
  AUTO = 'auto',
  MANUAL = 'manual',
}
export const ExpressionType = createEnumType<ExpressionTypeEnum>(ExpressionTypeEnum)

export enum TargetingClauseServingStatusEnum {
  TARGETING_CLAUSE_ARCHIVED = 'TARGETING_CLAUSE_ARCHIVED',
  TARGETING_CLAUSE_PAUSED = 'TARGETING_CLAUSE_PAUSED',
  TARGETING_CLAUSE_STATUS_LIVE = 'TARGETING_CLAUSE_STATUS_LIVE',
  TARGETING_CLAUSE_POLICING_SUSPENDED = 'TARGETING_CLAUSE_POLICING_SUSPENDED',
  CAMPAIGN_OUT_OF_BUDGET = 'CAMPAIGN_OUT_OF_BUDGET',
  AD_GROUP_PAUSED = 'AD_GROUP_PAUSED',
  AD_GROUP_ARCHIVED = 'AD_GROUP_ARCHIVED',
  CAMPAIGN_PAUSED = 'CAMPAIGN_PAUSED',
  CAMPAIGN_ARCHIVED = 'CAMPAIGN_ARCHIVED',
  ACCOUNT_OUT_OF_BUDGET = 'ACCOUNT_OUT_OF_BUDGET',
  PORTFOLIO_ENDED = 'PORTFOLIO_ENDED',
}
export const TargetingClauseServingStatusType = createEnumType<TargetingClauseServingStatusEnum>(
  TargetingClauseServingStatusEnum,
)
export const TargetingClause = t.intersection([
  t.strict({
    /**
     * The ID of the target
     */
    targetId: TargetId,

    /**
     * The ID of the campaign to which this target belongs
     */
    campaignId: CampaignId,

    /**
     * The ID of the ad group to which this target belongs.
     */
    adGroupId: AdGroupId,

    /**
     * Advertiser-specified state of the target
     */
    state: TargetingClauseStateType,

    /**
     * The expression to match against search queries
     */
    expression: TargetingExpressions,

    /**
     * The type of expression
     */
    expressionType: ExpressionType,
  }),
  t.partial({
    /**
     * Bid used when ads are sourced using this target.
     */
    bid: t.number,
  }),
])
export type TargetingClause = t.TypeOf<typeof TargetingClause>

export const TargetingClauses = t.array(TargetingClause)
export type TargetingClauses = t.TypeOf<typeof TargetingClause>

export const TargetingClauseExtended = t.intersection([
  TargetingClause,
  t.strict({
    /**
     * The date the ad group was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the ad group was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: TargetingClauseServingStatusType,
  }),
])
export type TargetingClauseExtended = t.TypeOf<typeof TargetingClauseExtended>

export const ProductRecommendationRequest = t.strict({
  /**
   * The number of recommendations to return in one page.
   */
  pageSize: t.number,

  /**
   * The number of pages to index into the result set
   */
  pageNumber: t.number,

  /**
   * A list of asins for which to get recommendations for
   */
  asins: t.array(t.string),
})
export type ProductRecommendationRequest = t.TypeOf<typeof ProductRecommendationRequest>

export const RecommendedTargetAsin = t.strict({
  /**
   * The recommended asin to target
   */
  recommendedTargetAsin: t.string,
})

export type RecommendedTargetAsin = t.TypeOf<typeof RecommendedTargetAsin>
export const RecommendedTargetAsins = t.array(RecommendedTargetAsin)

export const ProductRecommendationResponse = t.strict({
  /**
   * The number of recommendations from which there are to page through.
   */
  totalResultCount: t.number,

  /**
   * The number of pages to index into the result set
   */
  recommendedProducts: RecommendedTargetAsins,
})
export type ProductRecommendationResponse = t.TypeOf<typeof ProductRecommendationResponse>

export const CategoryId = t.number
export type CategoryId = t.TypeOf<typeof CategoryId>

export const CategoryResponse = t.strict({
  /**
   * The ID of the category
   */
  id: CategoryId,

  /**
   * The name of the category
   */
  name: t.string,

  /**
   * A boolean describing whether this category can be targeted or not in a targeting expression
   */
  isTargetable: t.boolean,

  /**
   * The path of the category within the category catalogue
   */
  path: t.boolean,
})
export type CategoryResponse = t.TypeOf<typeof CategoryResponse>

export const AgeRange = t.strict({
  /**
   * The id of the age range.
   */
  id: t.number,

  /**
   * The name of the age range
   */
  name: t.string,
})
export type AgeRange = t.TypeOf<typeof AgeRange>
export const AgeRanges = t.array(AgeRange)

export const BrandId = t.number
export type BrandId = t.TypeOf<typeof BrandId>

export const BrandResponse = t.strict({
  /**
   * The ID of the brand. This is for use in targeting expressions.
   */
  id: BrandId,

  /**
   * The name of the brand
   */
  name: t.string,
})
export type BrandResponse = t.TypeOf<typeof BrandResponse>
export const BrandResponses = t.array(BrandResponse)

export const RefinementsResponse = t.strict({
  /**
   * The ID of the category
   */
  categoryId: CategoryId,

  /**
   * An array of age ranges this category supports.  Not all categories have age ranges.
   */
  ageRanges: AgeRanges,

  /**
   * Brands that can be found within this category.
   */
  brands: BrandResponses,
})
export type RefinementsResponse = t.TypeOf<typeof RefinementsResponse>

export const TargetingClauseResponse = t.partial({
  /**
   * The ID of the target that was created/updated, if successful
   */
  targetId: TargetId,

  /**
   * An enumerated success or error code for machine use.
   */
  code: t.string,

  /**
   * A human-readable description of the error, if unsuccessful
   */
  details: t.string,
})
export type TargetingClauseResponse = t.TypeOf<typeof TargetingClauseResponse>

export const CreateTargetingClausesParams = t.partial({
  /**
   * The ID of the campaign to which this target belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the target
   */
  state: TargetingClauseStateType,

  /**
   * The expression to match against search queries
   */
  expression: TargetingExpressions,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,

  /**
   * Bid used when ads are sourced using this target.
   */
  bid: t.number,
})
export type CreateTargetingClausesParams = t.TypeOf<typeof CreateTargetingClausesParams>

export const ListTargetingClausesParams = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Restricts results to targets with state within the specified comma-separated list.
     * Possible filter types are: enabled, paused, or archived
     */
    stateFilter: TargetingClauseStateType,

    /**
     * Restricts results to targets within campaigns specified in comma-separated list
     */
    campaignIdFilter: CampaignIds,

    /**
     * Restricts results to targets within ad groups specified in comma-separated list
     */
    adGroupIdFilter: AdGroupIds,

    /**
     * Restricts results to targets with the specified target Ids specified in comma-separated list
     */
    targetIdFilter: TargetIds,
  }),
])
export type ListTargetingClausesParams = t.TypeOf<typeof ListTargetingClausesParams>

export const UpdateTargetingClausesParams = t.partial({
  /**
   * The ID of the campaign to which this target belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the target
   */
  state: TargetingClauseStateType,

  /**
   * The expression to match against search queries
   */
  expression: TargetingExpressions,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,

  /**
   * Bid used when ads are sourced using this target.
   */
  bid: t.number,
})
export type UpdateTargetingClausesParams = t.TypeOf<typeof UpdateTargetingClausesParams>
