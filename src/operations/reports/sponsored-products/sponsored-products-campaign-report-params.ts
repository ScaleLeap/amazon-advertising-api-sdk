import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportType } from '../report-types'
import { SponsoredProductsCampaignReportMetrics } from '../metrics/sponsored-products-campaign-report-metrics'

export interface SponsoredProductsCampaignReportParams
  extends BaseReportParams<SponsoredProductsReportType, SponsoredProductsCampaignReportMetrics> {
  recordType: 'campaigns'
}
