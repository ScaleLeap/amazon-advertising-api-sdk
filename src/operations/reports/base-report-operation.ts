import { Decode } from '../../decorators'
import { Operation } from '../operation'
import { ReportResponse, ReportId } from './report-response'

export class BaseReportOperation extends Operation {
  @Decode(ReportResponse)
  public getReport(reportId: ReportId) {
    return this.client.get<ReportResponse>(`${this.version}/reports/${reportId}`)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public async downloadReport<T extends string>(
    reportId: ReportId,
  ): Promise<Partial<Record<T, 'number' | 'string'>>[]> {
    return this.client.download(`${this.version}/reports/${reportId}/download`)
  }
}
