import { ReportSegments } from './report-segments'

export interface BaseReportParams<RecordType, ReportMetrics> {
  /**
   * The type of entity for which the report should be generated.
   */
  recordType: RecordType

  /**
   * _Optional_. Dimension on which to segment the report. See segmentation details in the
   * following table.
   */
  segment?: ReportSegments

  /**
   * The date for which to retrieve the performance report in YYYYMMDD format.
   * The time zone is specified by the profile used to request the report.
   * If this date is today, then the performance report may contain partial information.
   * Reports are not available for data older than 60 days. For details on data latency,
   * see the Service Guarantees in the
   * [Developer Notes](https://advertising.amazon.com/API/docs/v2/guides/developer_notes) section.
   */
  reportDate: string

  /**
   * An array of the metrics to be included in the report.
   */
  metrics: ReportMetrics[]
}
