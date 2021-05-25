import { SponsoredDisplayReportType } from '../report-types'
import { SponsoredDisplayAsinReportMetrics } from '../metrics'
import { SponsoredDisplayBaseReportParams } from './sponsored-display-base-report-params'

export interface SponsoredDisplayAsinReportParams
  extends SponsoredDisplayBaseReportParams<
    SponsoredDisplayReportType,
    SponsoredDisplayAsinReportMetrics
  > {
  recordType: 'asins'
}
