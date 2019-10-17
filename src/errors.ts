/**
 * Copyright (C) 2019, Scale Leap
 */

import { ExtendableError } from 'ts-error'

export interface ErrorObject {
  code: string
  details: string
  requestId: string
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

  public constructor(err: ErrorObject) {
    super(err.details)
    this.code = err.code
    this.requestId = err.requestId
  }
}

export class UnauthorizedError extends GenericError {}

export class BadRequestError extends GenericError {}

export class UnprocessableEntityError extends GenericError {}

export class ResourceNotFoundError extends GenericError {}

export class NotAcceptableError extends GenericError {}

export function apiErrorFactory(err: ErrorObject): GenericError {
  switch (err.code) {
    case 'UNAUTHORIZED':
      return new UnauthorizedError(err)
    case 'NOT_FOUND':
      return new ResourceNotFoundError(err)
    case '400':
      return new BadRequestError(err)
    case '406':
      return new NotAcceptableError(err)
    case '422':
      return new UnprocessableEntityError(err)
    default:
      return new GenericError(err)
  }
}
