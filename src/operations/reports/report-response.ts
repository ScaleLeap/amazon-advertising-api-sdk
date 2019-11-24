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

export const ReportId = t.string
export type ReportId = t.TypeOf<typeof ReportId>

export const ReportResponse = t.intersection([
  t.type({
    /**
     * The ID of the report that was requested.
     */
    reportId: ReportId,

    /**
     * The status of the generation of the report, it can be IN_PROGRESS, SUCCESS or FAILURE.
     */
    status: ReportResponseStatusEnumType,

    /**
     * Description of the status.
     */
    statusDetails: t.string,
  }),
  t.partial({
    /**
     * The record type of the report. It can be campaigns, adGroups, productAds or keywords.
     */
    recordType: t.string,

    /**
     * The URI from the API service from which a redirect to the report can be found. It's only available if status is SUCCESS.
     */
    location: t.string,

    /**
     * The size of the report file in bytes. It's only available if status is SUCCESS.
     */
    fileSize: t.number,
  }),
])

export type ReportResponse = t.TypeOf<typeof ReportResponse>
