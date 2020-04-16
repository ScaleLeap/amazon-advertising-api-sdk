import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportType } from '../report-types'
import { SponsoredProductsAsinsReportMetrics } from '../metrics/sponsored-products-asins-report-metrics'

export interface SponsoredProductsAsinsReportParams
  extends BaseReportParams<SponsoredProductsReportType, SponsoredProductsAsinsReportMetrics> {
  recordType: 'asins'
}
