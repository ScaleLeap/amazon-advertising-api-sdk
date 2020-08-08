import * as t from 'io-ts'
import { SponsoredDisplayCommonReportMetrics } from './sponsored-display-common-report-metrics'

/**
 * These metrics are specific to T00001 tactic campaign reports.
 */
export const SponsoredDisplayCampaignReportMetrics = t.union([
  SponsoredDisplayCommonReportMetrics,

  t.union([
    /**
     * The name of the campaign.
     */
    t.literal('campaignName'),

    /**
     * The identifier of the campaign.
     */
    t.literal('campaignId'),

    /**
     * The status of the campaign.
     */
    t.literal('campaignStatus'),

    /**
     * The currency code associated with the campaign.
     */
    t.literal('currency'),

    /**
     * Total number of ad impressions.
     */
    t.literal('impressions'),

    /**
     * Total number of ad clicks associated with the campaign. Divide clicks by impressions to calculate click through rate (CTR).
     */
    t.literal('clicks'),

    /**
     * The total cost of all ad clicks for the campaign. Divide cost by clicks to calculate average cost per click (CPC).
     */
    t.literal('cost'),

    /**
     * Number of attributed detail page views occuring within 14 days of click on an ad.
     */
    t.literal('attributedDPV14d'),

    /**
     * Number of attributed units sold occurring within 14 days of click on an ad.
     */
    t.literal('attributedUnitsSold14d'),

    /**
     * Aggregate value of attributed sales occurring within 14 days of click on ad.
     */
    t.literal('attributedSales14d'),
  ]),
])

export type SponsoredDisplayCampaignReportMetrics = t.TypeOf<
  typeof SponsoredDisplayCampaignReportMetrics
>
