import * as t from 'io-ts'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'
import { CampaignId, CampaignIds } from '../campaigns/types'
import { ListPagination } from '../commons/types'

export const AdGroupId = t.number
export type AdGroupId = t.TypeOf<typeof AdGroupId>

export const AdGroupIds = t.array(AdGroupId)
export type AdGroupIds = t.TypeOf<typeof AdGroupIds>

export const AdGroupName = t.string
export type AdGroupName = t.TypeOf<typeof AdGroupName>

/**
 * Advertiser-specified state of the ad group.
 */
export const AdGroupState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('archived'),
])
export type AdGroupState = t.TypeOf<typeof AdGroupState>

/**
 * The mutation status of the portfolio.
 */
export const AdGroupResponseStatus = t.union([
  t.literal('SUCCESS'),
  t.literal('INVALID_ARGUMENT'),
  t.literal('NOT_FOUND'),
])
export type AdGroupResponseStatus = t.TypeOf<typeof AdGroupResponseStatus>

/**
 * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
 */
export const AdGroupServingStatus = t.union([
  t.literal('AD_GROUP_ARCHIVED'),
  t.literal('AD_GROUP_INCOMPLETE'), // The docs don't mention about this type
  t.literal('AD_GROUP_PAUSED'),
  t.literal('AD_GROUP_STATUS_ENABLED'),
  t.literal('AD_POLICING_SUSPENDED'),
  t.literal('CAMPAIGN_OUT_OF_BUDGET'),
  t.literal('CAMPAIGN_PAUSED'),
  t.literal('CAMPAIGN_ARCHIVED'),
  t.literal('CAMPAIGN_INCOMPLETE'),
  t.literal('ACCOUNT_OUT_OF_BUDGET'),
  t.literal('ADVERTISER_PAYMENT_FAILURE'),
  t.literal('PORTFOLIO_PENDING_START_DATE'), // The docs don't mention about this type
  t.literal('PORTFOLIO_ENDED'), // The docs don't mention about this type
  t.literal('ENDED'), // The docs don't mention about this type
])
export type AdGroupServingStatus = t.TypeOf<typeof AdGroupServingStatus>

export const AdGroup = t.strict({
  /**
   * The ID of the campaign to which this ad group belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group
   */
  adGroupId: AdGroupId,

  /**
   * The name of the ad group
   */
  name: AdGroupName,

  /**
   * The bid used when keywords belonging to this ad group don't specify a bid.
   */
  defaultBid: t.number,

  /**
   * Advertiser-specified state of the ad group
   */
  state: AdGroupState,
})

export type AdGroup = t.TypeOf<typeof AdGroup>

export const AdGroupExtended = t.intersection([
  AdGroup,

  t.type({
    /**
     * The date the ad group was created as epoch time in milliseconds
     */
    creationDate: DateFromNumber,

    /**
     * The date the ad group was last updated as epoch time in milliseconds
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
     */
    servingStatus: AdGroupServingStatus,
  }),
])
export type AdGroupExtended = t.TypeOf<typeof AdGroupExtended>

export const AdGroupResponse = t.intersection([
  t.type({
    /**
     * The ID of the ad group that was created/updated, if successful
     */
    adGroupId: AdGroupId,

    /**
     * An enumerated success or error code for machine use.
     */
    code: AdGroupResponseStatus,
  }),

  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.string,
  }),
])
export type AdGroupResponse = t.TypeOf<typeof AdGroupResponse>

export const ListAdGroupsParams = t.intersection([
  ListPagination,

  t.partial({
    /**
     * Optional. Restricts results to ad groups within campaigns specified in comma-separated list.
     */
    campaignIdFilter: CampaignIds,

    /**
     * Optional. Restricts results to ad groups specified in comma-separated list.
     */
    adGroupIdFilter: AdGroupIds,

    /**
     * Optional.Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of: enabled, paused, or archived.
     * Default behavior is to include all.
     */
    stateFilter: t.array(AdGroupState),

    /**
     * Optional. Restricts results to ad groups with the specified name.
     */
    name: AdGroupName,
  }),
])
export type ListAdGroupsParams = t.TypeOf<typeof ListAdGroupsParams>

export const CreateAdGroupsParams = t.strict({
  /**
   * The ID of the campaign to which this ad group belongs
   */
  campaignId: CampaignId,

  /**
   * The name of the ad group
   */
  name: AdGroupName,

  /**
   * Advertiser-specified state of the ad group
   */
  state: AdGroupState,

  /**
   * The bid used when keywords belonging to this ad group don't specify a bid.
   */
  defaultBid: t.number,
})
export type CreateAdGroupsParams = t.TypeOf<typeof CreateAdGroupsParams>

export const UpdateAdGroupsParams = t.intersection([
  t.strict({
    /**
     * The ID of the ad group.
     */
    adGroupId: AdGroupId,
  }),
  t.partial({
    /**
     * The name of the ad group.
     */
    name: AdGroupName,

    /**
     * The bid used when keywords belonging to this ad group don't specify a bid.
     */
    defaultBid: t.number,

    /**
     * Advertiser-specified state of the ad group
     */
    state: AdGroupState,
  }),
])
export type UpdateAdGroupsParams = t.TypeOf<typeof UpdateAdGroupsParams>
