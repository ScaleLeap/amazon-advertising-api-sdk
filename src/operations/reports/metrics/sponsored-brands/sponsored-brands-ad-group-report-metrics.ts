import * as t from 'io-ts'

export const SponsoredBrandsAdGroupReportMetrics = t.union([
  /**
   * Unique numerical ID of the campaign
   */
  t.literal('campaignId'),

  /**
   * Unique name of the campaign
   */
  t.literal('campaignName'),

  /**
   * Total budget allotted to the campaign
   */
  t.literal('campaignBudget'),

  t.literal('campaignBudgetType'),

  /**
   * Status of the campaign
   */
  t.literal('campaignStatus'),

  /**
   * Unique name of the ad group
   */
  t.literal('adGroupName'),

  /**
   * Unique numerical ID of the ad group
   */
  t.literal('adGroupId'),
])
export type SponsoredBrandsAdGroupReportMetrics = t.TypeOf<
  typeof SponsoredBrandsAdGroupReportMetrics
>
