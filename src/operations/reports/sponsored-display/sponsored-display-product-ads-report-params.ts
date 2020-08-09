import { SponsoredDisplayReportType } from '../report-types'
import { SponsoredDisplayProductAdsReportMetrics } from '../metrics'
import { SponsoredDisplayBaseReportParams } from './sponsored-display-base-report-params'

export interface SponsoredDisplayProductAdsReportParams
  extends SponsoredDisplayBaseReportParams<
    SponsoredDisplayReportType,
    SponsoredDisplayProductAdsReportMetrics
  > {
  recordType: 'productAds'
}
