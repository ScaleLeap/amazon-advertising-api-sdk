/**
 * Copyright (C) 2019, Scale Leap
 */

import { ExtendableError } from 'ts-error'

export interface ErrorObject {
  code: string
  details: string
}

export class NullError extends ExtendableError {
  public constructor(resource: string) {
    super(`Response result is null for "${resource}".`)
  }
}

export class InvalidProgramStateError extends ExtendableError {
  public constructor(additionalDetails?: string) {
    super(
      [
        'This program state should never happen.',
        'If you encountered this error, please report it asap.',
        additionalDetails,
      ].join(' '),
    )
  }
}

export class SnapshotDownloadError extends ExtendableError {
  public constructor(snapshotId: string, snapshotStatus: string) {
    super(
      [
        'Snapshot must have status equal to SUCCESS before downloading.',
        `Got snapshot ${snapshotId} with status ${snapshotStatus} instead.`,
      ].join(' '),
    )
  }
}

export class GenericError extends ExtendableError {
  public code: string

  public requestId: string

  public constructor(err: ErrorObject, headers: Headers) {
    super(err.details)
    this.code = err.code
    this.requestId = headers.get('x-amz-request-id') || headers.get('x-amz-rid') || ''
  }
}

export class ThrottlingError extends GenericError {
  /**
   * The number of seconds that you should wait before submitting another API call.
   *
   * Rate limiting will occur dynamically based on the overall system load.
   *
   * Read [documentation](https://advertising.amazon.com/API/docs/en-us/get-started/developer-notes#Rate-limiting).
   */
  public retryAfter: number

  public constructor(err: ErrorObject, headers: Headers) {
    super(err, headers)
    this.retryAfter = Number(headers.get('Retry-After'))
  }
}

export class UnauthorizedError extends GenericError {}

export class BadRequestError extends GenericError {}

export class UnprocessableEntityError extends GenericError {}

export class ResourceNotFoundError extends GenericError {}

export class NotAcceptableError extends GenericError {}

export function apiErrorFactory(err: ErrorObject, headers: Headers): GenericError {
  switch (err.code) {
    case 'UNAUTHORIZED':
      return new UnauthorizedError(err, headers)
    case 'NOT_FOUND':
      return new ResourceNotFoundError(err, headers)
    case '400':
      return new BadRequestError(err, headers)
    case '406':
      return new NotAcceptableError(err, headers)
    case '422':
      return new UnprocessableEntityError(err, headers)
    case '429':
      return new ThrottlingError(err, headers)
    default:
      return new GenericError(err, headers)
  }
}
