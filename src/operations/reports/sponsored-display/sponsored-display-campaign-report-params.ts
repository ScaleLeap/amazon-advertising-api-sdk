import { SponsoredDisplayReportType } from '../report-types'
import { SponsoredDisplayCampaignReportMetrics } from '../metrics'
import { SponsoredDisplayBaseReportParams } from './sponsored-display-base-report-params'

export interface SponsoredDisplayCampaignReportParams
  extends SponsoredDisplayBaseReportParams<
    SponsoredDisplayReportType,
    SponsoredDisplayCampaignReportMetrics
  > {
  recordType: 'campaigns'
}
