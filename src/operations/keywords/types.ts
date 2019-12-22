import * as t from 'io-ts'
import { createEnumType } from '../commons/types'
import { CampaignId } from '../campaigns/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'

export const KeywordId = t.number
export type KeywordId = t.TypeOf<typeof KeywordId>

/**
 * Advertiser-specified state of the keyword
 */
export enum KeywordStateEnum {
  ENABLED = 'enabled',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}
export const KeywordStateType = createEnumType<KeywordStateEnum>(KeywordStateEnum)

/**
 * The match type used to match the keyword to search query
 */
export enum KeywordMatchTypeEnum {
  EXACT = 'exact',
  PHRASE = 'phrase',
  BROAD = 'broad',
}
export const KeywordMatchType = createEnumType<KeywordMatchTypeEnum>(KeywordMatchTypeEnum)

/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export enum KeywordServingStatusEnum {
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
}
export const KeywordServingStatusType = createEnumType<KeywordServingStatusEnum>(
  KeywordServingStatusEnum,
)

export const Keyword = t.strict({
  /**
   * The ID of the keyword
   */
  keywordId: KeywordId,

  /**
   * The ID of the campaign to which this keyword belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this keyword belongs
   */
  adGroupId: t.number, //TODO: Change to AdGroupId type

  /**
   * Advertiser-specified state of the keyword
   */
  state: KeywordStateType,

  /**
   * The expression to match against search queries
   */
  keywordText: t.string,

  /**
   * The match type used to match the keyword to search query
   */
  matchType: KeywordMatchType,

  /**
   * Bid used when ads are sourced using this keyword. Only compatible with biddable match types.
   */
  bid: t.number,
})
export type Keyword = t.TypeOf<typeof Keyword>

export const KeywordExtended = t.intersection([
  Keyword,
  t.strict({
    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: KeywordServingStatusType,
  }),
])
export type KeywordExtended = t.TypeOf<typeof KeywordExtended>

export const KeywordResponse = t.intersection([
  t.type({
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: KeywordId,

    /**
     * An enumerated success or error code for machine use.
     */
    code: t.string,
  }),
  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
  }),
])
export type KeywordResponse = t.TypeOf<typeof KeywordResponse>

/**
 * Advertiser-specified state of the keyword
 */
export enum NegativeKeywordStateEnum {
  ENABLED = 'enabled',
  ARCHIVED = 'archived',
}
export const NegativeKeywordStateType = createEnumType<NegativeKeywordStateEnum>(
  NegativeKeywordStateEnum,
)

/**
 * The match type used to match the keyword to search query
 */
export enum NegativeKeywordMatchTypeEnum {
  NEGATIVE_EXACT = 'negativeExact',
  NEGATIVE_PHRASE = 'negativePhrase',
}
export const NegativeKeywordMatchType = createEnumType<NegativeKeywordMatchTypeEnum>(
  NegativeKeywordMatchTypeEnum,
)

/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export enum NegativeKeywordServingStatusEnum {
  TARGETING_CLAUSE_ARCHIVED = 'TARGETING_CLAUSE_ARCHIVED',
  TARGETING_CLAUSE_STATUS_LIVE = 'TARGETING_CLAUSE_STATUS_LIVE',
}
export const NegativeKeywordServingStatusType = createEnumType<NegativeKeywordServingStatusEnum>(
  NegativeKeywordServingStatusEnum,
)

export const NegativeKeyword = t.strict({
  /**
   * The ID of the keyword
   */
  keywordId: KeywordId,

  /**
   * The ID of the campaign to which this keyword belongs
   */
  campaignId: CampaignId,

  /**
   * The ID of the ad group to which this keyword belongs
   */
  adGroupId: t.number, //TODO: Change to AdGroupId type

  /**
   * Advertiser-specified state of the keyword
   */
  state: NegativeKeywordStateType,

  /**
   * The expression to match against search queries
   */
  keywordText: t.string,

  /**
   * Ads don't show on search queries that
   * contain the exact phrase for 'negativeExact' or close variations for 'negativePhrase'.
   */
  matchType: NegativeKeywordMatchType,
})
export type NegativeKeyword = t.TypeOf<typeof NegativeKeyword>

export const NegativeKeywordExtended = t.intersection([
  NegativeKeyword,
  t.strict({
    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: NegativeKeywordServingStatusType,
  }),
])
export type NegativeKeywordExtended = t.TypeOf<typeof NegativeKeywordExtended>

export const NegativeKeywordResponse = t.intersection([
  t.type({
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: KeywordId,

    /**
     * An enumerated success or error code for machine use.
     */
    code: t.string,
  }),
  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
  }),
])
export type NegativeKeywordResponse = t.TypeOf<typeof NegativeKeywordResponse>

/**
 * Advertiser-specified state of the keyword
 */
export enum CampaignNegativeKeywordStateEnum {
  ENABLED = 'enabled',
  DELETED = 'deleted',
}
export const CampaignNegativeKeywordStateType = createEnumType<CampaignNegativeKeywordStateEnum>(
  CampaignNegativeKeywordStateEnum,
)

/**
 * The match type used to match the keyword to search query
 */
export enum CampaignNegativeKeywordMatchTypeEnum {
  NEGATIVE_EXACT = 'negativeExact',
  NEGATIVE_PHRASE = 'negativePhrase',
}
export const CampaignNegativeKeywordMatchType = createEnumType<
  CampaignNegativeKeywordMatchTypeEnum
>(CampaignNegativeKeywordMatchTypeEnum)

/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export enum CampaignNegativeKeywordServingStatusEnum {
  TARGETING_CLAUSE_STATUS_LIVE = 'TARGETING_CLAUSE_STATUS_LIVE',
}
export const CampaignNegativeKeywordServingStatusType = createEnumType<
  CampaignNegativeKeywordServingStatusEnum
>(CampaignNegativeKeywordServingStatusEnum)

export const CampaignNegativeKeyword = t.strict({
  /**
   * The ID of the keyword
   */
  keywordId: KeywordId,

  /**
   * The ID of the campaign to which this keyword belongs
   */
  campaignId: CampaignId,

  /**
   * Advertiser-specified state of the keyword
   */
  state: CampaignNegativeKeywordStateType,

  /**
   * The expression to match against search queries
   */
  keywordText: t.string,

  /**
   * The match type used to match the keyword to search query
   */
  matchType: CampaignNegativeKeywordMatchType,
})
export type CampaignNegativeKeyword = t.TypeOf<typeof CampaignNegativeKeyword>

export const CampaignNegativeKeywordExtended = t.intersection([
  CampaignNegativeKeyword,
  t.strict({
    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    creationDate: DateFromNumber,

    /**
     * The date the campaign was created as epoch time in milliseconds.
     */
    lastUpdatedDate: DateFromNumber,

    /**
     * The computed status, accounting for campaign out of budget, policy violations, etc. See developer notes for more information.
     */
    servingStatus: CampaignNegativeKeywordServingStatusType,
  }),
])
export type CampaignNegativeKeywordExtended = t.TypeOf<typeof CampaignNegativeKeywordExtended>

export const CampaignNegativeKeywordResponse = t.intersection([
  t.type({
    /**
     * The ID of the keyword that was created/updated, if successful
     */
    keywordId: KeywordId,

    /**
     * An enumerated success or error code for machine use.
     */
    code: t.string,
  }),
  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
  }),
])
export type CampaignNegativeKeywordResponse = t.TypeOf<typeof CampaignNegativeKeywordResponse>
