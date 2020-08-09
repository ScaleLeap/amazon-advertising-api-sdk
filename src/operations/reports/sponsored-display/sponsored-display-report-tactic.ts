import * as t from 'io-ts'

/**
 * The advertising tactic associated with the campaign.
 */
export const ReportTactic = t.union([
  /**
   * Reach shoppers who showed interest in categories related to your promoted products, or target specific products or product categories on Amazon.
   * This tactic is for use by only vendors.
   * This tactic is used to retrieve metrics for Sponsored Display campaigns that use interest, product or category audiences, including Sponsored Display campaigns that were previously Product Display Ads campaigns.
   * This tactic name is only applicable for the requestReport operation and does not apply to any other campaign management operations.
   */
  t.literal('T00001'),

  /**
   * Choose individual products to show your ads in placements related to those products.
   * [Categories] Categories: Choose individual categories to show your ads in placements related to those categories.
   */
  t.literal('T00020'),

  /**
   * Note that this advertising tactic is not currently supported. This note will be removed when this advertising tactic is available.
   * Select individual audiences to show your ads.
   */
  t.literal('T00030'),

  /**
   * Shoppers who viewed the detail pages of your advertised products or similar products.
   */
  t.literal('remarketing'),
])
export type ReportTactic = t.TypeOf<typeof ReportTactic>
