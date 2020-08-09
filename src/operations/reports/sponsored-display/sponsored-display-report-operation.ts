import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { BaseReportOperation } from '../base-report-operation'
import { ReportResponse } from '../report-response'
import {
  SponsoredDisplayAdGroupReportParams,
  SponsoredDisplayCampaignReportParams,
  SponsoredDisplayProductAdsReportParams,
  SponsoredDisplayTargetReportParams,
} from '../sponsored-display/index'

export type SponsoredDisplayReportParams =
  | SponsoredDisplayAdGroupReportParams
  | SponsoredDisplayCampaignReportParams
  | SponsoredDisplayProductAdsReportParams
  | SponsoredDisplayTargetReportParams

export class SponsoredDisplayReportOperation<
  ReportParams extends SponsoredDisplayReportParams
> extends BaseReportOperation {
  private type = 'sd'

  /**
   * Creates a report request.
   * Record types can be: campaigns, adGroups, productAds, and targets
   *
   * @param params -
   * @returns
   */
  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }
}
