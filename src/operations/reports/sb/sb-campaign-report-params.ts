import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { CampaignReportMetricsEnum } from '../metrics/campaign-report-metrics-enum'

export interface SponsoredBrandsCampaignReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, CampaignReportMetricsEnum> {
  recordType: SponsoredBrandsReportTypeEnum.CAMPAIGNS
}
