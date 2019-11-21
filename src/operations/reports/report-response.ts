import * as t from 'io-ts'
import { createEnumType } from '../commons/types'

export enum ReportResponseStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export const ReportResponseStatusEnumType = createEnumType<ReportResponseStatusEnum>(
  ReportResponseStatusEnum,
)
export type ReportResponseStatusEnumType = t.TypeOf<typeof ReportResponseStatusEnumType>

export const ReportResponse = t.partial({
  /**
   * The ID of the report that was requested.
   */
  reportId: t.string,

  /**
   * The record type of the report. It can be campaigns, adGroups, productAds or keywords.
   */
  recordType: t.string,

  /**
   * The status of the generation of the report, it can be IN_PROGRESS, SUCCESS or FAILURE.
   */
  status: ReportResponseStatusEnumType,

  /**
   * Description of the status.
   */
  statusDetails: t.string,

  /**
   * The URI from the API service from which a redirect to the report can be found. It's only available if status is SUCCESS.
   */
  location: t.string,

  /**
   * The size of the report file in bytes. It's only available if status is SUCCESS.
   */
  fileSize: t.number,
})

export type ReportResponse = t.TypeOf<typeof ReportResponse>
