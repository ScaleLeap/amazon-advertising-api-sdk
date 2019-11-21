import { omit } from 'lodash'
import { Decode } from '../../../decorators'
import { BaseReportOperation } from '../base-report-operation'
import { ReportResponse } from '../report-response'
import { SponsoredProductsCampaignReportParams } from './sp-campaign-report-params'

type SponsoredProductsReportParams = SponsoredProductsCampaignReportParams

export class SponsoredProductsReportOperation<
  ReportParams extends SponsoredProductsReportParams
> extends BaseReportOperation {
  private type = 'sp'

  @Decode(ReportResponse)
  public requestReport(params: ReportParams) {
    return this.client.post<ReportResponse>(
      `${this.version}/${this.type}/${params.recordType}/report`,
      this.paramsFilterTransformerReal(omit(params, ['recordType']), ['metrics']),
    )
  }
}
