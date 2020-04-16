import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportType } from '../report-types'
import { SponsoredBrandsSearchTermReportMetrics } from '../metrics'

export interface SponsoredBrandsSearchTermReportParams
  extends BaseReportParams<SponsoredBrandsReportType, SponsoredBrandsSearchTermReportMetrics> {
  recordType: 'searchTerms'
}
