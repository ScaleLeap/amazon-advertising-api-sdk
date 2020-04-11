import * as t from 'io-ts'
import { ListPagination } from '../commons/types'
import { CampaignId, CampaignIds } from '../campaigns/types'
import { DateFromNumber } from 'io-ts-types/lib/DateFromNumber'
import { AdGroupId, AdGroupIds, AdGroupState } from '../ad-groups/types'

export const KeywordId = t.number
export type KeywordId = t.TypeOf<typeof KeywordId>

export const KeywordIds = t.array(KeywordId)
export type KeywordIds = t.TypeOf<typeof KeywordIds>

/**
 * Advertiser-specified state of the keyword
 */
export const KeywordState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('archived'),
])
export type KeywordState = t.TypeOf<typeof KeywordState>

/**
 * The match type used to match the keyword to search query
 */
export const KeywordMatchType = t.union([
  t.literal('exact'),
  t.literal('phrase'),
  t.literal('broad'),
])
export type KeywordMatchType = t.TypeOf<typeof KeywordMatchType>

/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export const KeywordServingStatus = t.union([
  t.literal('TARGETING_CLAUSE_ARCHIVED'),
  t.literal('TARGETING_CLAUSE_PAUSED'),
  t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
  t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
  t.literal('CAMPAIGN_OUT_OF_BUDGET'),
  t.literal('AD_GROUP_PAUSED'),
  t.literal('AD_GROUP_ARCHIVED'),
  t.literal('CAMPAIGN_PAUSED'),
  t.literal('CAMPAIGN_ARCHIVED'),
  t.literal('ACCOUNT_OUT_OF_BUDGET'),
])
export type KeywordServingStatus = t.TypeOf<typeof KeywordServingStatus>

export const KeywordResponseStatus = t.union([
  t.literal('SUCCESS'),
  t.literal('INVALID_ARGUMENT'),
  t.literal('NOT_FOUND'),
])
export type KeywordResponseStatus = t.TypeOf<typeof KeywordResponseStatus>

export const Keyword = t.intersection([
  t.strict({
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
    adGroupId: AdGroupId,

    /**
     * Advertiser-specified state of the keyword
     */
    state: KeywordState,

    /**
     * The expression to match against search queries
     */
    keywordText: t.string,

    /**
     * The match type used to match the keyword to search query
     */
    matchType: KeywordMatchType,
  }),
  t.partial({
    /**
     * Bid used when ads are sourced using this keyword. Only compatible with biddable match types.
     */
    bid: t.number,
  }),
])

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
    servingStatus: KeywordServingStatus,
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
    code: KeywordResponseStatus,
  }),
  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
  }),
])
export type KeywordResponse = t.TypeOf<typeof KeywordResponse>

export const CreateKeywordsParam = t.strict({
  campaignId: CampaignId,

  adGroupId: AdGroupId,

  keywordText: t.string,

  matchType: KeywordMatchType,

  state: KeywordState,
})
export type CreateKeywordsParam = t.TypeOf<typeof CreateKeywordsParam>

export const UpdateKeywordsParam = t.strict({
  keywordId: KeywordId,

  state: KeywordState,

  bid: t.number,
})
export type UpdateKeywordsParam = t.TypeOf<typeof UpdateKeywordsParam>

export const ListBiddableKeywordsParam = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Must be one of: broad, phrase, exact
     */
    matchTypeFilter: KeywordMatchType,

    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.string,

    /**
     * Optional. Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of: enabled, paused, or archived. Default behavior is to include all.
     */
    stateFilter: KeywordState,

    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.array(CampaignId),

    /**
     * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: AdGroupIds,
  }),
])
export type ListBiddableKeywordsParam = t.TypeOf<typeof ListBiddableKeywordsParam>

export const ListBiddableKeywordsExtendedParam = t.intersection([
  ListBiddableKeywordsParam,
  t.partial({
    campaignType: KeywordMatchType,

    /**
     * Optional. Restricts results to keywords with the specified keyword Id specified in comma-separated list.
     */
    keywordIdFilter: t.array(KeywordId),
  }),
])
export type ListBiddableKeywordsExtendedParam = t.TypeOf<typeof ListBiddableKeywordsExtendedParam>

/**
 * Advertiser-specified state of the keyword
 */
export const NegativeKeywordState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('archived'),
])
export type NegativeKeywordState = t.TypeOf<typeof NegativeKeywordState>

/**
 * The match type used to match the keyword to search query
 */
export const NegativeKeywordMatchType = t.union([
  t.literal('negativeExact'),
  t.literal('negativePhrase'),
])
export type NegativeKeywordMatchType = t.TypeOf<typeof NegativeKeywordMatchType>

/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 */
export const NegativeKeywordServingStatus = t.union([
  t.literal('TARGETING_CLAUSE_ARCHIVED'),
  t.literal('TARGETING_CLAUSE_PAUSED'),
  t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
  t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
  t.literal('CAMPAIGN_OUT_OF_BUDGET'),
  t.literal('AD_GROUP_PAUSED'),
  t.literal('AD_GROUP_ARCHIVED'),
  t.literal('CAMPAIGN_PAUSED'),
  t.literal('CAMPAIGN_ARCHIVED'),
  t.literal('ACCOUNT_OUT_OF_BUDGET'),
])
export type NegativeKeywordServingStatus = t.TypeOf<typeof NegativeKeywordServingStatus>

export const NegativeKeywordResponseStatus = t.union([
  t.literal('SUCCESS'),
  t.literal('INVALID_ARGUMENT'),
  t.literal('NOT_FOUND'),
])
export type NegativeKeywordResponseStatus = t.TypeOf<typeof NegativeKeywordResponseStatus>

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
  adGroupId: AdGroupId,

  /**
   * Advertiser-specified state of the keyword
   */
  state: NegativeKeywordState,

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
    servingStatus: NegativeKeywordServingStatus,
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
    code: NegativeKeywordResponseStatus,
  }),
  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
  }),
])
export type NegativeKeywordResponse = t.TypeOf<typeof NegativeKeywordResponse>

export const CreateNegativeKeywordsParam = t.strict({
  campaignId: CampaignId,

  adGroupId: AdGroupId,

  keywordText: t.string,

  matchType: NegativeKeywordMatchType,

  state: NegativeKeywordState,
})
export type CreateNegativeKeywordsParam = t.TypeOf<typeof CreateNegativeKeywordsParam>

export const UpdateNegativeKeywordsParam = t.strict({
  keywordId: KeywordId,

  state: NegativeKeywordState,
})
export type UpdateNegativeKeywordsParam = t.TypeOf<typeof UpdateNegativeKeywordsParam>

export const ListNegativeKeywordsParam = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Valid values are: negativePhrase, and negativeExact
     */
    matchTypeFilter: NegativeKeywordMatchType,

    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.string,

    /**
     * Optional. Restricts results to keywords with state within the specified comma-separated list.
     * Must be one of enabled, paused, archived. Default behavior is to include all.
     * TODO: check Negative Keyword State again. Conflict in the docs: There is disabled state or not?
     *
     */
    stateFilter: NegativeKeywordState,

    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.array(CampaignId),

    /**
     * Optional. Restricts results to keywords within ad groups specified in comma-separated list.
     */
    adGroupIdFilter: AdGroupIds,
  }),
])
export type ListNegativeKeywordsParam = t.TypeOf<typeof ListNegativeKeywordsParam>

/**
 * Advertiser-specified state of the keyword
 */
export const CampaignNegativeKeywordState = t.union([t.literal('enabled'), t.literal('deleted')])
export type CampaignNegativeKeywordState = t.TypeOf<typeof CampaignNegativeKeywordState>

/**
 * The match type used to match the keyword to search query
 */
export const CampaignNegativeKeywordMatchType = t.union([
  t.literal('negativeExact'),
  t.literal('negativePhrase'),
])
export type CampaignNegativeKeywordMatchType = t.TypeOf<typeof CampaignNegativeKeywordMatchType>

/**
 * The computed status, accounting for out of budget, policy violations, etc.
 * See developer notes for more information.
 * TODO: The docs only mention to TARGETING_CLAUSE_STATUS_LIVE.
 * Need check again.
 */
export const CampaignNegativeKeywordServingStatus = t.union([
  t.literal('TARGETING_CLAUSE_ARCHIVED'),
  t.literal('TARGETING_CLAUSE_PAUSED'),
  t.literal('TARGETING_CLAUSE_STATUS_LIVE'),
  t.literal('TARGETING_CLAUSE_POLICING_SUSPENDED'),
  t.literal('CAMPAIGN_OUT_OF_BUDGET'),
  t.literal('AD_GROUP_PAUSED'),
  t.literal('AD_GROUP_ARCHIVED'),
  t.literal('CAMPAIGN_PAUSED'),
  t.literal('CAMPAIGN_ARCHIVED'),
  t.literal('ACCOUNT_OUT_OF_BUDGET'),
])
export type CampaignNegativeKeywordServingStatus = t.TypeOf<
  typeof CampaignNegativeKeywordServingStatus
>

export const CampaignNegativeKeywordResponseStatus = t.union([
  t.literal('SUCCESS'),
  t.literal('INVALID_ARGUMENT'),
  t.literal('NOT_FOUND'),
])
export type CampaignNegativeKeywordResponseStatus = t.TypeOf<
  typeof CampaignNegativeKeywordResponseStatus
>

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
  state: CampaignNegativeKeywordState,

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
    servingStatus: CampaignNegativeKeywordServingStatus,
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
    code: CampaignNegativeKeywordResponseStatus,
  }),
  t.partial({
    /**
     * A human-readable description of the error, if unsuccessful.
     */
    details: t.string,
  }),
])
export type CampaignNegativeKeywordResponse = t.TypeOf<typeof CampaignNegativeKeywordResponse>

export const CreateCampaignNegativeKeywordsParam = t.strict({
  campaignId: CampaignId,

  keywordText: t.string,

  matchType: CampaignNegativeKeywordMatchType,

  state: CampaignNegativeKeywordState,
})
export type CreateCampaignNegativeKeywordsParam = t.TypeOf<
  typeof CreateCampaignNegativeKeywordsParam
>

export const UpdateCampaignNegativeKeywordsParam = t.strict({
  keywordId: KeywordId,

  state: CampaignNegativeKeywordState,
})
export type UpdateCampaignNegativeKeywordsParam = t.TypeOf<
  typeof UpdateCampaignNegativeKeywordsParam
>

export const ListCampaignNegativeKeywordsParam = t.intersection([
  ListPagination,
  t.partial({
    /**
     * Optional. Restricts results to keywords with match types within the specified comma-separated list.
     * Valid values are: negativePhrase, negativeExact
     */
    matchTypeFilter: CampaignNegativeKeywordMatchType,

    /**
     * Optional. Restricts results to keywords with the specified keywordText.
     */
    keywordText: t.string,

    /**
     * Optional. Restricts results to keywords within campaigns specified in comma-separated list.
     */
    campaignIdFilter: t.array(CampaignId),
  }),
])
export type ListCampaignNegativeKeywordsParam = t.TypeOf<typeof ListCampaignNegativeKeywordsParam>

export const SuggestedKeyword = t.strict({
  /**
   * The suggested keyword
   */
  keywordText: t.string,

  /**
   * Match type of the suggested keyword
   */
  matchType: t.string,
})

export const SuggestedKeywords = t.array(SuggestedKeyword)
export type SuggestedKeywords = t.TypeOf<typeof SuggestedKeywords>

export const AdGroupSuggestedKeywordsResponse = t.strict({
  /**
   * The ID of the requested ad group.
   */
  adGroupId: AdGroupId,

  /**
   * List of suggested keywords.
   */
  suggestedKeywords: t.array(SuggestedKeyword),
})
export type AdGroupSuggestedKeywordsResponse = t.TypeOf<typeof AdGroupSuggestedKeywordsResponse>

export const AdGroupSuggestedKeywordsExtendedResponse = t.intersection([
  t.strict({
    /**
     * The ID of the requested ad group
     */
    adGroupId: AdGroupId,

    /**
     * The campaign ID in which the ad group belongs to
     */
    campaignId: CampaignId,

    /**
     * The suggested keyword
     */
    keywordText: t.string,

    /**
     * Match type of the suggested keyword
     */
    matchType: t.string,

    /**
     * The state of the ad for which the keyword is suggested. Should be either enabled or paused
     */
    state: t.string,
  }),
  t.partial({
    /**
     * The keyword bid suggestion.
     * Will only be shown if suggestBid is 'yes' and the keyword has a bid suggestion
     */
    bid: t.number,
  }),
])

export type AdGroupSuggestedKeywordsExtendedResponse = t.TypeOf<
  typeof AdGroupSuggestedKeywordsExtendedResponse
>

export const AsinSuggestedKeywordsResponse = t.strict({
  /**
   * The ASIN for which a keyword suggestion is requested
   */
  asin: t.string,

  /**
   * List of suggested keywords
   */
  suggestedKeywords: SuggestedKeywords,
})
export type AsinSuggestedKeywordsResponse = t.TypeOf<typeof AsinSuggestedKeywordsResponse>

export const BulkAsinSuggestedKeywordsResponse = t.array(SuggestedKeywords)
export type BulkAsinSuggestedKeywordsResponse = t.TypeOf<typeof BulkAsinSuggestedKeywordsResponse>

export const SuggestBids = t.union([t.literal('yes'), t.literal('no')])
export type SuggestBids = t.TypeOf<typeof SuggestBids>

export const GetAdGroupSuggestedKeywordsParams = t.strict({
  /**
   * Maximum number of returned suggested keywords. Default is 100, maximum is 1000
   */
  maxNumSuggestions: t.number,

  /**
   * Ad state filter (values are comma separated), to filter out the Ads to get suggested keywords for their ASINs.
   * Valid values are: enabled, paused, and archived.
   * Default values are enabled and paused
   */
  adStateFilter: t.array(AdGroupState),
})
export type GetAdGroupSuggestedKeywordsParams = t.TypeOf<typeof GetAdGroupSuggestedKeywordsParams>

export const GetAdGroupSuggestedKeywordsExtendedParams = t.intersection([
  GetAdGroupSuggestedKeywordsParams,
  t.partial({
    /**
     * Valid values are yes and no. Default value is no.
     * If yes, any suggested keywords can contain the extra bid field, where bid will be populated by calculated suggested bid.
     * Note: The bid field will be missing if there are no suggested bids for the keyword
     */
    suggestBids: SuggestBids,
  }),
])
export type GetAdGroupSuggestedKeywordsExtendedParams = t.TypeOf<
  typeof GetAdGroupSuggestedKeywordsExtendedParams
>

/**
 * Newly created SB keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation.
 * After moderation, the keyword will be in an enabled state.
 */
export const SponsoredBrandsKeywordState = t.union([
  t.literal('enabled'),
  t.literal('paused'),
  t.literal('pending'),
  t.literal('archived'),
  t.literal('draft'),
])

export const SponsoredBrandsKeyword = t.strict({
  /**
   * The keyword identifier.
   */
  keywordId: KeywordId,

  /**
   * The identifier of the ad group associated with the keyword.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of the campaign associated with the keyword.
   */
  campaignId: CampaignId,

  /**
   * The keyword text. The maximum number of words for this string is 10.
   */
  keywordText: t.string,

  /**
   * The match type. For more information, see match types in the Amazon Advertising support center.
   */
  matchType: KeywordMatchType,

  /**
   * Newly created SponsoredBrands keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderationn.
   * After moderation, the keyword will be in an enabled state.
   */
  state: SponsoredBrandsKeywordState,

  /**
   * The bid associated with the keyword.
   * Note that this value must be less than the budget associated with the Advertiser account.
   * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
   */
  bid: t.number,
})
export type SponsoredBrandsKeyword = t.TypeOf<typeof SponsoredBrandsKeyword>

export const ListSponsoredBrandsKeywordParams = t.intersection([
  ListPagination,
  t.partial({
    /**
     * The returned array is filtered to include only keywords with matchType set to one of the values in the specified comma-delimited list.
     */
    matchTypeFilter: t.array(KeywordMatchType),

    /**
     * The returned array includes only keywords with the specified text.
     */
    keywordText: t.string,

    /**
     * The returned array includes only keywords with state set to the specified value.
     */
    stateFilter: KeywordState,

    /**
     * The returned array includes only keywords associated with campaigns matching those specified by identifier in the comma-delimited string.
     */
    campaignIdFilter: CampaignIds,

    /**
     * The returned array includes only keywords associated with ad groups matching those specified by identifier in the comma-delimited string.
     */
    adGroupIdFilter: AdGroupIds,

    /**
     * The returned array includes only keywords with identifiers matching those specified in the comma-delimited string.
     */
    keywordIdFilter: KeywordIds,
  }),
])
export type ListSponsoredBrandsKeywordParams = t.TypeOf<typeof ListSponsoredBrandsKeywordParams>

export const UpdateSponsoredBrandsKeywordParams = t.strict({
  /**
   * The identifier of the keyword.
   */
  keywordId: KeywordId,

  /**
   * The identifier of an existing ad group to which the keyword is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of an existing campaign to which the keyword is associated.
   */
  campaignId: CampaignId,

  /**
   * Newly created SponsoredBrands keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderationn.
   * After moderation, the keyword will be in an enabled state.
   */
  state: SponsoredBrandsKeywordState,

  /**
   * The bid associated with the keyword.
   * Note that this value must be less than the budget associated with the Advertiser account.
   * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
   */
  bid: t.number,
})
export type UpdateSponsoredBrandsKeywordParams = t.TypeOf<typeof UpdateSponsoredBrandsKeywordParams>

export const CreateSponsoredBrandsKeywordParams = t.strict({
  /**
   * The identifier of an existing ad group to which the keyword is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of an existing campaign to which the keyword is associated.
   */
  campaignId: CampaignId,

  /**
   * The keyword text. The maximum number of words for this string is 10.
   */
  keywordText: t.string,

  /**
   * The match type. For more information, see match types in the Amazon Advertising support center.
   */
  matchType: KeywordMatchType,

  /**
   * The bid associated with the keyword.
   * Note that this value must be less than the budget associated with the Advertiser account.
   * For more information, see the Keyword bid constraints by marketplace section of the supported features article.
   */
  bid: t.number,
})
export type CreateSponsoredBrandsKeywordParams = t.TypeOf<typeof CreateSponsoredBrandsKeywordParams>

export const SponsoredBrandsKeywordResponse = t.intersection([
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
export type SponsoredBrandsKeywordResponse = t.TypeOf<typeof SponsoredBrandsKeywordResponse>

export const SponsoredBrandsNegativeKeywordState = t.union([
  t.literal('enabled'),
  t.literal('pending'),
  t.literal('archived'),
  t.literal('draft'),
])
export type SponsoredBrandsNegativeKeywordState = t.TypeOf<
  typeof SponsoredBrandsNegativeKeywordState
>

export const SponsoredBrandsNegativeKeyword = t.strict({
  /**
   * The identifier of the negative keyword
   */
  keywordId: KeywordId,

  /**
   * The identifier of the ad group to which the negative keyword is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of the campaign to which the negative keyword is associated.
   */
  campaignId: CampaignId,

  /**
   * The keyword text.
   * Maximum length is ten words if 'matchType' is 'negativeExact'.
   * Maximum length is 4 words if 'matchType' is 'negativePhrase'.
   */
  keywordText: t.string,

  /**
   * The negative match type.
   * For more information, see negative keyword match types in the Amazon Advertising support center.
   */
  matchType: NegativeKeywordMatchType,

  /**
   * The current state of the negative keyword.
   * Newly created SponsoredBrands negative keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation review.
   * 'enabled' refers to negative keywords that are active.
   * 'archived' refers to negative keywords that are permanently inactive and cannot be returned to the 'enabled' state.
   */
  state: SponsoredBrandsNegativeKeywordState,
})
export type SponsoredBrandsNegativeKeyword = t.TypeOf<typeof SponsoredBrandsNegativeKeyword>

export const CreateSponsoredBrandsNegativeKeywordParams = t.strict({
  /**
   * The identifier of the campaign to which the negative keyword is associated.
   */
  campaignId: CampaignId,

  /**
   * The identifier of the ad group to which the negative keyword is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The keyword text.
   * Maximum length is ten words if 'matchType' is 'negativeExact'.
   * Maximum length is 4 words if 'matchType' is 'negativePhrase'.
   */
  keywordText: t.string,

  /**
   * The negative match type.
   * For more information, see negative keyword match types in the Amazon Advertising support center.
   */
  matchType: NegativeKeywordMatchType,
})
export type CreateSponsoredBrandsNegativeKeywordParams = t.TypeOf<
  typeof CreateSponsoredBrandsNegativeKeywordParams
>

export const UpdateSponsoredBrandsNegativeKeywordParams = t.partial({
  /**
   * The identifier of the campaign to which the negative keyword is associated.
   */
  campaignId: CampaignId,

  /**
   * The identifier of the ad group to which the negative keyword is associated.
   */
  adGroupId: AdGroupId,

  /**
   * The identifier of the negative keyword.
   */
  keywordId: KeywordId,

  /**
   * The current state of the negative keyword.
   * Newly created SponsoredBrands negative keywords are in a default state of 'draft' before transitioning to a 'pending' state for moderation review.
   * 'enabled' refers to negative keywords that are active.
   * 'archived' refers to negative keywords that are permanently inactive and cannot be returned to the 'enabled' state.
   */
  state: SponsoredBrandsNegativeKeywordState,
})
export type UpdateSponsoredBrandsNegativeKeywordParams = t.TypeOf<
  typeof UpdateSponsoredBrandsNegativeKeywordParams
>

export const SponsoredBrandsNegativeKeywordResponse = t.intersection([
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
export type SponsoredBrandsNegativeKeywordResponse = t.TypeOf<
  typeof SponsoredBrandsNegativeKeywordResponse
>
export const SponsoredBrandsKeywordRecommendationParams = t.partial({
  /**
   * An array of ASINs for which keyword recommendations are generated.
   */
  asins: t.array(t.string),

  /**
   * Specifies the URL of a Stores page.
   * Vendors may also specify the URL of a custom landing page.
   * The products on the landing page are used to generate keyword recommendations.
   */
  url: t.string,
})
export type SponsoredBrandsKeywordRecommendationParams = t.TypeOf<
  typeof SponsoredBrandsKeywordRecommendationParams
>

export const SponsoredBrandsKeywordRecommendation = t.strict({
  /**
   * A recommendation identifier that describes the suggested action for the recommendation.
   */
  recommendationId: t.string,

  /**
   * Recommended keyword value.
   */
  value: t.string,

  /**
   * The match type. For more information, see match types in the Amazon Advertising support center.
   */
  matchType: KeywordMatchType,
})
export type SponsoredBrandsKeywordRecommendation = t.TypeOf<
  typeof SponsoredBrandsKeywordRecommendation
>
