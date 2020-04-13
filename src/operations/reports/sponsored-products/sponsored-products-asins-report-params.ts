import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsAsinsReportMetrics } from '../metrics/sponsored-products-asins-report-metrics'

export interface SponsoredProductsAsinsReportParams
  extends BaseReportParams<SponsoredProductsReportTypeEnum, SponsoredProductsAsinsReportMetrics> {
  recordType: SponsoredProductsReportTypeEnum.ASINS
}
