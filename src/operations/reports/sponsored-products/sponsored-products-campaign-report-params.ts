import { BaseReportParams } from '../base-report-params'
import { SponsoredProductsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsCampaignReportMetrics } from '../metrics/sponsored-products-campaign-report-metrics'

export interface SponsoredProductsCampaignReportParams
  extends BaseReportParams<
    SponsoredProductsReportTypeEnum,
    SponsoredProductsCampaignReportMetrics
  > {
  recordType: SponsoredProductsReportTypeEnum.CAMPAIGNS
}
