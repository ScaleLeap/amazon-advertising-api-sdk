import * as t from 'io-ts'

export const SponsoredBrandsCampaignReportMetrics = t.union([
  /**
   * Total budget allotted to the campaign
   */
  t.literal('campaignBudget'),

  t.literal('campaignBudgetType'),

  /**
   * Status of the campaign
   */
  t.literal('campaignStatus'),
])
export type SponsoredBrandsCampaignReportMetrics = t.TypeOf<
  typeof SponsoredBrandsCampaignReportMetrics
>
