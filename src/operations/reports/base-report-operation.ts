import { Decode } from '../../decorators'
import { Operation } from '../operation'
import { ReportResponse, ReportId } from './report-response'

export class BaseReportOperation extends Operation {
  /**
   * Retrieve status, metadata and location of a previously requested performance report.
   *
   * @param {ReportId} reportId
   * @returns
   * @memberof BaseReportOperation
   */
  @Decode(ReportResponse)
  public getReport(reportId: ReportId) {
    return this.client.get<ReportResponse>(`${this.version}/reports/${reportId}`)
  }

  /**
   * Downloads the report corresponding to the reportId specified
   *
   * @template T
   * @param {ReportId} reportId
   * @returns {(Promise<Partial<Record<T, 'number' | 'string'>>[]>)}
   * @memberof BaseReportOperation
   */
  public async downloadReport<T extends Record<string, string | number | null>>(
    reportId: ReportId,
  ): Promise<T[]> {
    return this.client.download(`${this.version}/reports/${reportId}/download`)
  }
}
