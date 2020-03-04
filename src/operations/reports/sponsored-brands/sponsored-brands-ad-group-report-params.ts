import { BaseReportParams } from '../base-report-params'
import { SponsoredBrandsReportTypeEnum } from '../report-types-enum'
import { AdGroupReportMetricsEnum } from '../metrics/ad-group-report-metrics-enum'

export interface SponsoredBrandsAdGroupReportParams
  extends BaseReportParams<SponsoredBrandsReportTypeEnum, AdGroupReportMetricsEnum> {
  recordType: SponsoredBrandsReportTypeEnum.AD_GROUPS
}
