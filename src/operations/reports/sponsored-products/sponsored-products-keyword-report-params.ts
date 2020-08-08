import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportType } from '../report-types'
import { SponsoredProductsKeywordReportMetrics } from '../metrics'

export interface SponsoredProductsKeywordReportParams
  extends BaseReportParams<SponsoredProductsReportType, SponsoredProductsKeywordReportMetrics> {
  recordType: 'keywords'
}
