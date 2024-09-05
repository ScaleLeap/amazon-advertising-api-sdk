import { Decode } from '../../decorators'
import { Operation } from '../operation'
import { ReportResponse, ReportId } from './report-response'

export class BaseReportOperation extends Operation {
  /**
   * Retrieve status, metadata and location of a previously requested performance report.
   *
   * @param reportId -
   * @returns
   */
  @Decode(ReportResponse)
  public getReport(reportId: ReportId) {
    return this.client.get<ReportResponse>(`${this.version}/reports/${reportId}`)
  }

  /**
   * Downloads the report corresponding to the reportId specified
   *
   * @param reportId -
   * @returns \{(Promise\<Partial\<Record\<T, 'number' | 'string'\>\>[]\>)\}
   */
  public async downloadReport<T extends string>(
    reportId: ReportId,
  ): Promise<Partial<Record<T, 'number' | 'string'>>[]> {
    return this.client.download(`${this.version}/reports/${reportId}/download`)
  }
}
