import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { SponsoredProductsCampaignReportMetrics } from '../metrics/sponsored-products-campaign-report-metrics'

export interface SponsoredBrandsCampaignReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, SponsoredProductsCampaignReportMetrics> {
  recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS
}
