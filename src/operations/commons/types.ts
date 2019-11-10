import * as t from 'io-ts'

export const CountryCode = t.union([
  t.literal('AU'),
  t.literal('CA'),
  t.literal('DE'),
  t.literal('ES'),
  t.literal('FR'),
  t.literal('IT'),
  t.literal('JP'),
  t.literal('UK'),
  t.literal('US'),
])
export type CountryCode = t.TypeOf<typeof CountryCode>

export const CurrencyCode = t.union([
  t.literal('AUD'),
  t.literal('CAD'),
  t.literal('EUR'),
  t.literal('GBP'),
  t.literal('JPY'),
  t.literal('USD'),
])
export type CurrencyCode = t.TypeOf<typeof CurrencyCode>

export const ListPagination = t.partial({
  /**
   * 0-indexed record offset for the result set. Defaults to 0.
   */
  startIndex: t.number,

  /**
   * Number of records to include in the paged response. Defaults to max page size.
   */
  count: t.number,
})
export type ListPagination = t.TypeOf<typeof ListPagination>

export const ResponseStatus = t.strict({
  /**
   * An enumerated success or error code for machine use.
   */
  code: t.number,

  /**
   * A human-readable description of the error, if unsuccessful.
   */
  details: t.string,
})
export type ResponseStatus = t.TypeOf<typeof ResponseStatus>

export const TimeZone = t.union([
  t.literal('America/Los_Angeles'),
  t.literal('Asia/Tokyo'),
  t.literal('Australia/Sydney'),
  t.literal('Europe/London'),
  t.literal('Europe/Paris'),
])
export type TimeZone = t.TypeOf<typeof TimeZone>
