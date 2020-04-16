import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportType } from '../report-types'
import { SponsoredBrandsAdGroupReportMetrics } from '../metrics'

export interface SponsoredBrandsAdGroupReportParams
  extends BaseReportParams<SponsoredBrandsReportType, SponsoredBrandsAdGroupReportMetrics> {
  recordType: 'adGroups'
}
