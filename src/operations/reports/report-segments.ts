import * as t from 'io-ts'

export const ReportSegments = t.union([
  /**
   * The optional dimension on which to segment a keyword report.
   * This is also referred to as the search terms report.
   */
  t.literal('query'),

  /**
   * The optional dimension on which to segment a campaigns report.
   * Placement refers to the location on a page where your ad appears.
   */
  t.literal('placement'),
])
export type ReportSegments = t.TypeOf<typeof ReportSegments>
