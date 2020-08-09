import { SponsoredDisplayReportType } from '../report-types'
import { SponsoredDisplayTargetReportMetrics } from '../metrics'
import { SponsoredDisplayBaseReportParams } from './sponsored-display-base-report-params'

export interface SponsoredDisplayTargetReportParams
  extends SponsoredDisplayBaseReportParams<
    SponsoredDisplayReportType,
    SponsoredDisplayTargetReportMetrics
  > {
  recordType: 'targets'
}
