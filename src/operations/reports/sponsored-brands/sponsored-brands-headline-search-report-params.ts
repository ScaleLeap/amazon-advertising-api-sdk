import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportType } from '../report-types'
import { SponsoredBrandsHeadlineSearchReportMetrics } from '../metrics'

export interface SponsoredBrandsHeadlineSearchReportParams
  extends BaseReportParams<SponsoredBrandsReportType, SponsoredBrandsHeadlineSearchReportMetrics> {
  recordType: 'headlineSearch'
}
