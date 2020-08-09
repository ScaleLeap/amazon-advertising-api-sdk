import { SponsoredDisplayReportType } from '../report-types'
import { SponsoredDisplayAdGroupReportMetrics } from '../metrics'
import { SponsoredDisplayBaseReportParams } from './sponsored-display-base-report-params'

export interface SponsoredDisplayAdGroupReportParams
  extends SponsoredDisplayBaseReportParams<
    SponsoredDisplayReportType,
    SponsoredDisplayAdGroupReportMetrics
  > {
  recordType: 'adGroups'
}
