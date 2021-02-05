import * as t from 'io-ts'

/**
 * Set to video to retrieve a Sponsored Brands video report.
 */
export const ReportCreativeTypes = t.literal('video')
export type ReportCreativeTypes = t.TypeOf<typeof ReportCreativeTypes>
