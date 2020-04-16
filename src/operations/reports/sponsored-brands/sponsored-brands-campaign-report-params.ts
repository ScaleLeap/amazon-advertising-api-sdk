import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportType } from '../report-types'
import { SponsoredBrandsCampaignReportMetrics } from '../metrics'

export interface SponsoredBrandsCampaignReportParams
  extends BaseReportParams<SponsoredBrandsReportType, SponsoredBrandsCampaignReportMetrics> {
  recordType: 'campaigns'
}
