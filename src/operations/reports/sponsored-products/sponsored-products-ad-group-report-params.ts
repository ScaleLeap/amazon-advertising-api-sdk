import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportType } from '../report-types'
import { SponsoredProductsAdGroupReportMetrics } from '../metrics'

export interface SponsoredProductsAdGroupReportParams
  extends BaseReportParams<SponsoredProductsReportType, SponsoredProductsAdGroupReportMetrics> {
  recordType: 'adGroups'
}
