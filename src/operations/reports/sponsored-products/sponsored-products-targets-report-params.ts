import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportType } from '../report-types'
import { SponsoredProductsProductTargetingReportMetrics } from '../metrics'

export interface SponsoredProductsTargetsReportParams
  extends BaseReportParams<
    SponsoredProductsReportType,
    SponsoredProductsProductTargetingReportMetrics
  > {
  recordType: 'targets'
}
