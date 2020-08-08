import * as t from 'io-ts'
import { SponsoredDisplayCommonReportMetrics } from './sponsored-display-common-report-metrics'

/**
 * Metrics specific to remarketing and T00020 tactic ad group.
 */
export const SponsoredDisplayAdGroupReportMetrics = t.union([
  SponsoredDisplayCommonReportMetrics,

  t.union([
    /**
     * The name of the ad group.
     */
    t.literal('adGroupName'),

    /**
     * The identifier of the ad group.
     */
    t.literal('adGroupId'),
  ]),
])

export type SponsoredDisplayAdGroupReportMetrics = t.TypeOf<
  typeof SponsoredDisplayAdGroupReportMetrics
>
