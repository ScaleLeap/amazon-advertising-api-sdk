import * as t from 'io-ts'
import { createEnumType } from '../commons/types'
import { CampaignId } from '../campaigns/types'
import { AdGroupId } from '../adGroups/types'

export const TargetId = t.number
export type TargetId = t.TypeOf<typeof TargetId>

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
}
export const TargetingExpressionType = createEnumType<TargetingExpressionTypeEnum>(
  TargetingExpressionTypeEnum,
)

export const TargetingExpression = t.strict({
  /**
   * The type of intent
   */
  type: TargetingExpressionType,

  /**
   * The value which should be targeted
   */
  value: t.string,
})
export type TargetingExpression = t.TypeOf<typeof TargetingExpression>

export const TargetingExpressions = t.array(TargetingExpression)
export type TargetingExpressions = t.TypeOf<typeof TargetingExpressions>

export enum ExpressionTypeEnum {
  AUTO = 'auto',
  MANUAL = 'manual',
}
export const ExpressionType = createEnumType<ExpressionTypeEnum>(ExpressionTypeEnum)

export const TargetingClause = t.strict({
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

  /**
   * Bid used when ads are sourced using this target.
   */
  bid: t.number,
})
export type TargetingClause = t.TypeOf<typeof TargetingClause>

export const TargetingClauses = t.array(TargetingClause)
export type TargetingClauses = t.TypeOf<typeof TargetingClause>
