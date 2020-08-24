import * as t from 'io-ts'
import { AdGroupId } from '../ad-groups/types'
import { TargetingClauseState, ExpressionType } from '../product-targeting/types'

export const SponsoredDisplayNegativeTargetingExpressionQueryType = t.union([
  t.literal('asinBrandSameAs'),
  t.literal('asinSameAs'),
])
export type SponsoredDisplayNegativeTargetingExpressionQueryType = t.TypeOf<
  typeof SponsoredDisplayNegativeTargetingExpressionQueryType
>

export const SponsoredDisplayNegativeTargetingExpression = t.strict({
  /**
   * The intent type.
   */
  type: SponsoredDisplayNegativeTargetingExpressionQueryType,
  /**
   * The value to be negatively targeted. Used only in manual expressions.
   */
  value: t.string,
})
export type SponsoredDisplayNegativeTargetingExpression = t.TypeOf<
  typeof SponsoredDisplayNegativeTargetingExpression
>

export const CreateSponsoredDisplayNegativeTargetingClausesParams = t.strict({
  /**
   * The ID of the ad group to which this negative target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the negative target
   */
  state: TargetingClauseState,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,

  /**
   * The expression to negatively match against.
   */
  expression: t.array(SponsoredDisplayNegativeTargetingExpression),
})
export type CreateSponsoredDisplayNegativeTargetingClausesParams = t.TypeOf<
  typeof CreateSponsoredDisplayNegativeTargetingClausesParams
>
