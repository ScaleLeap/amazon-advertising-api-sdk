import * as t from 'io-ts'

export const SponsoredBrandsTargetReportMetrics = t.union([
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

  /**
   * One of: daily or lifetime
   */
  t.literal('campaignBudgetType'),

  /**
   * Status of the campaign
   */
  t.literal('campaignStatus'),

  /**
   * The product target identifier
   */
  t.literal('targetId'),

  /**
   * The product targeting expression. Not available for search term report.
   */
  t.literal('targetingExpression'),

  /**
   * The product targeting type.
   * One of: asinCategorySameAs, asinBrandSameAs, asinPriceLessThan, asinPriceBetween, asinPriceGreaterThan, asinReviewRatingLessThan, asinReviewRatingBetween, asinReviewRatingGreaterThan, asinSameAs.
   * Not available for search term report.
   */
  t.literal('targetingType'),

  /**
   * The product targeting text. Not available for search term report.
   */
  t.literal('targetingText'),

  /**
   * Type of matching for the keyword or phrase used in bid. Must be one of: broad, phrase, or exact
   */
  t.literal('matchType'),
])
export type SponsoredBrandsTargetReportMetrics = t.TypeOf<typeof SponsoredBrandsTargetReportMetrics>
