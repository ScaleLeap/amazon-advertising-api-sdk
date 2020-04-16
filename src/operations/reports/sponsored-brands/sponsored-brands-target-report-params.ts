import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportType } from '../report-types'
import { SponsoredBrandsTargetReportMetrics } from '../metrics'

export interface SponsoredBrandsTargetReportParams
  extends BaseReportParams<SponsoredBrandsReportType, SponsoredBrandsTargetReportMetrics> {
  recordType: 'targets'
}
