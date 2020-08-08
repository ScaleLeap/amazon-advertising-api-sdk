import * as t from 'io-ts'

export const SponsoredBrandsKeywordReportMetrics = t.union([
  /**
   * Unique numerical ID of the campaign
   */
  t.literal('campaignId'),

  /**
   * Unique name of the campaign
   */
  t.literal('campaignName'),

  /**
   * Unique numerical ID of the ad group
   */
  t.literal('adGroupId'),

  /**
   * Unique name of the ad group
   */
  t.literal('adGroupName'),

  t.literal('campaignBudgetType'),

  /**
   * Status of the campaign
   */
  t.literal('campaignStatus'),

  /**
   * ID of the keyword used in bid
   */
  t.literal('keywordId'),

  /**
   * Keyword state.
   */
  t.literal('keywordStatus'),

  /**
   * User-set bid value for keyword.
   */
  t.literal('keywordBid'),

  /**
   * Text of the keyword or phrase used in bid
   */
  t.literal('keywordText'),

  /**
   * Type of matching for the keyword or phrase used in bid. Must be one of: broad, phrase, or exact
   */
  t.literal('matchType'),
])
export type SponsoredBrandsKeywordReportMetrics = t.TypeOf<
  typeof SponsoredBrandsKeywordReportMetrics
>
