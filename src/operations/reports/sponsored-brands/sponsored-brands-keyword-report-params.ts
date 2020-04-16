import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportType } from '../report-types'
import { SponsoredBrandsKeywordReportMetrics } from '../metrics'

export interface SponsoredBrandsKeywordReportParams
  extends BaseReportParams<SponsoredBrandsReportType, SponsoredBrandsKeywordReportMetrics> {
  recordType: 'keywords'
}
