import * as t from 'io-ts'
import { AdGroupId } from '../ad-groups/types'
import {
  TargetingClauseState,
  ExpressionType,
  TargetingClauseServingStatus,
} from '../product-targeting/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const NegativeTargetId = t.number
export type NegativeTargetId = t.TypeOf<typeof NegativeTargetId>

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

export const SponsoredDisplayNegativeTargetingClause = t.intersection([
  CreateSponsoredDisplayNegativeTargetingClausesParams,
  t.strict({
    targetId: NegativeTargetId,
  }),
])
export type SponsoredDisplayNegativeTargetingClause = t.TypeOf<
  typeof SponsoredDisplayNegativeTargetingClause
>

export const SponsoredDisplayNegativeTargetingClauseExtended = t.intersection([
  SponsoredDisplayNegativeTargetingClause,
  t.strict({
    /**
     * The date the negative targeting was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the negative targeting was last updated as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: TargetingClauseServingStatus,
  }),
])
export type SponsoredDisplayNegativeTargetingClauseExtended = t.TypeOf<
  typeof SponsoredDisplayNegativeTargetingClauseExtended
>

export const UpdateSponsoredDisplayNegativeTargetingClausesParams = t.strict({
  targetId: NegativeTargetId,

  /**
   * Advertiser-specified state of the negative target
   */
  state: TargetingClauseState,
})
export type UpdateSponsoredDisplayNegativeTargetingClausesParams = t.TypeOf<
  typeof UpdateSponsoredDisplayNegativeTargetingClausesParams
>
