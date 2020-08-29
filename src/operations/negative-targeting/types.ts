import * as t from 'io-ts'
import { AdGroupId, AdGroupIds } from '../ad-groups/types'
import {
  TargetingClauseState,
  ExpressionType,
  TargetingClauseServingStatus,
  TargetingExpressions,
} from '../product-targeting/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'
import { CampaignId, CampaignIds } from '../campaigns/types'
import { ListPagination } from '../commons/types'

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

export const NegativeTargetingClauseResponse = t.partial({
  /**
   * The ID of the negative target that was created/updated, if successful
   */
  targetId: NegativeTargetId,

  /**
   * An enumerated success or error code for machine use.
   */
  code: t.string,

  /**
   * A human-readable description of the error, if unsuccessful
   */
  details: t.string,
})
export type NegativeTargetingClauseResponse = t.TypeOf<typeof NegativeTargetingClauseResponse>

export const CreateNegativeTargetingClausesParams = t.strict({
  /**
   * The ID of the campaign to which this negative target belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this negative target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the negative target
   */
  state: TargetingClauseState,

  /**
   * The expression to match against search queries
   */
  expression: TargetingExpressions,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,
})
export type CreateNegativeTargetingClausesParams = t.TypeOf<
  typeof CreateNegativeTargetingClausesParams
>

export const NegativeTargetingClause = t.strict({
  /**
   * The ID of the negative target
   */
  targetId: NegativeTargetId,

  /**
   * The ID of the campaign to which this negative target belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this negative target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the negative target
   */
  state: TargetingClauseState,

  /**
   * The expression to match against search queries
   */
  expression: TargetingExpressions,

  /**
   * The type of expression
   */
  expressionType: ExpressionType,
})
export type NegativeTargetingClause = t.TypeOf<typeof NegativeTargetingClause>

export const NegativeTargetingClauseExtended = t.intersection([
  NegativeTargetingClause,
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
export type NegativeTargetingClauseExtended = t.TypeOf<typeof NegativeTargetingClauseExtended>

export const ListNegativeTargetingClausesParams = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Restricts results to targets with state within the specified comma-separated list.
     * Possible filter types are: enabled, paused, or archived
     */
    stateFilter: TargetingClauseState,

    /**
     * Restricts results to targets within campaigns specified in comma-separated list.
     */
    campaignIdFilter: CampaignIds,

    /**
     * Restricts results to targets within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: AdGroupIds,

    /**
     * Restricts results to targets with the specified target Ids specified in comma-separated list.
     */
    targetIdFilter: t.array(NegativeTargetId),
  }),
])
export type ListNegativeTargetingClausesParams = t.TypeOf<typeof ListNegativeTargetingClausesParams>

export const UpdateNegativeTargetingClausesParams = t.partial({
  /**
   * The ID of the negative target.
   */
  targetId: NegativeTargetId,

  /**
   * The ID of the campaign to which this negative target belongs.
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this negative target belongs.
   */
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the negative target.
   */
  state: TargetingClauseState,

  /**
   * The expression to match against search queries.
   */
  expression: TargetingExpressions,

  /**
   * The type of expression.
   */
  expressionType: ExpressionType,
})
export type UpdateNegativeTargetingClausesParams = t.TypeOf<
  typeof UpdateNegativeTargetingClausesParams
>
