import * as t from 'io-ts'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'
import { CampaignId } from '../campaigns/types'
import { createEnumType } from '../commons/types'

export const AdGroupId = t.number
export type AdGroupId = t.TypeOf<typeof AdGroupId>

export const AdGroupName = t.string
export type AdGroupName = t.TypeOf<typeof AdGroupName>

/**
 * Advertiser-specified state of the ad group
 */
export enum AdGroupStateEnum {
  ENABLED = 'enabled',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}
export const AdGroupStateType = createEnumType<AdGroupStateEnum>(AdGroupStateEnum)
export type AdGroupStateType = t.TypeOf<typeof AdGroupStateType>

/**
 * The computed status, accounting for out of budget, policy violations, etc. See Developer notes for more information.
 */
export enum AdGroupServingStatusEnum {
  AD_GROUP_ARCHIVED = 'AD_GROUP_ARCHIVED',
  AD_GROUP_PAUSED = 'AD_GROUP_PAUSED',
  AD_GROUP_STATUS_ENABLED = 'AD_GROUP_STATUS_ENABLED',
  AD_POLICING_SUSPENDED = 'AD_POLICING_SUSPENDED',
  CAMPAIGN_OUT_OF_BUDGET = 'CAMPAIGN_OUT_OF_BUDGET',
  CAMPAIGN_PAUSED = 'CAMPAIGN_PAUSED',
  CAMPAIGN_ARCHIVED = 'CAMPAIGN_ARCHIVED',
  CAMPAIGN_INCOMPLETE = 'CAMPAIGN_INCOMPLETE',
  ACCOUNT_OUT_OF_BUDGET = 'ACCOUNT_OUT_OF_BUDGET',
  PORTFOLIO_PENDING_START_DATE = 'PORTFOLIO_PENDING_START_DATE', // The docs don't mention about this type
}
export const AdGroupServingStatusType = createEnumType<AdGroupServingStatusEnum>(
  AdGroupServingStatusEnum,
)
export type AdGroupServingStatusType = t.TypeOf<typeof AdGroupServingStatusType>

export const AdGroup = t.type({
  /**
   * The ID of the ad group
   */
  adGroupId: AdGroupId,

  /**
   * The name of the ad group
   */
  name: AdGroupName,

  /**
   * The ID of the campaign to which this ad group belongs
   */
  campaignId: CampaignId,

  /**
   * The bid used when keywords belonging to this ad group don't specify a bid.
   */
  defaultBid: t.number,

  /**
   * Advertiser-specified state of the ad group
   */
  state: AdGroupStateType,
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
    servingStatus: AdGroupServingStatusType,
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
    code: t.string,
  }),

  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful
     */
    details: t.string,
  }),
])
export type AdGroupResponse = t.TypeOf<typeof AdGroupResponse>
