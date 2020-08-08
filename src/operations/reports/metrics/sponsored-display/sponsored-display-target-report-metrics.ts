import * as t from 'io-ts'
import { SponsoredDisplayCommonReportMetrics } from './sponsored-display-common-report-metrics'

/**
 * These metrics are specific to T00020 tactic targeting reports:
 */
export const SponsoredDisplayTargetReportMetrics = t.union([
  SponsoredDisplayCommonReportMetrics,

  t.union([
    /**
     * The identifier of the targeting expression used in a bid.
     */
    t.literal('targetId'),

    /**
     * The string representation of your expression object in targeting clauses.
     */
    t.literal('targetingExpression'),

    /**
     * The resolved string representation of your expression object in targeting clauses.
     */
    t.literal('targetingText'),

    /**
     * The type of match for the targeting expression used in bid.
     * For manually created expressions, this value is TARGETING_EXPRESSION.
     * For auto-targeting expressions this value is TARGETING_EXPRESSION_PREDEFINED.
     */
    t.literal('targetingType'),
  ]),
])

export type SponsoredDisplayTargetReportMetrics = t.TypeOf<
  typeof SponsoredDisplayTargetReportMetrics
>
