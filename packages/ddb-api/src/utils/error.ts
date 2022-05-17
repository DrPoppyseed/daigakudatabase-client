/* eslint-disable max-classes-per-file */
import {
  BAD_REQUEST_ERROR_MESSAGE,
  BAD_VALUE_ERROR_MESSAGE,
  CANNOT_ACCESS_ERROR_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
  MISSING_TOKEN_ERROR_MESSAGE,
} from './constants'
import { toNumberIfNumeric } from './common'

export class SyntheticError extends Error {
  private readonly errorStatusCode: number
  private errorMessage: string

  constructor(statusCode: number, message: string) {
    super(message)
    this.name = this.constructor.name
    this.errorStatusCode = SyntheticError.initStatusCode(statusCode)
    this.errorMessage = SyntheticError.initMessage(message)
    Error.captureStackTrace(this, this.constructor)
  }

  get statusCode() {
    return this.errorStatusCode
  }

  set statusCode(value: string | number) {
    this.statusCode = toNumberIfNumeric(value) || 500
  }

  set message(value: string) {
    this.errorMessage = value
  }

  static initStatusCode = (value: string | number): number =>
    toNumberIfNumeric(value) || 500

  static initMessage = (value: string): string =>
    value || INTERNAL_SERVER_ERROR_MESSAGE
}

export class ResourceNotFoundError extends SyntheticError {
  constructor(resource?: string) {
    super(
      404,
      resource?.length
        ? `リソース ${resource} が見つかりませんでした。`
        : 'リソースが見つかりませんでした。'
    )
  }
}

export class ForbiddenError extends SyntheticError {
  constructor(message?: string) {
    super(403, getMessage(message, CANNOT_ACCESS_ERROR_MESSAGE))
  }
}

export class InternalError extends SyntheticError {
  constructor(message?: string) {
    super(500, getMessage(message, INTERNAL_SERVER_ERROR_MESSAGE))
  }
}

export class BadRequestError extends SyntheticError {
  constructor(message?: string) {
    super(400, getMessage(message, BAD_REQUEST_ERROR_MESSAGE))
  }
}

export class MissingTokenError extends SyntheticError {
  constructor(message?: string) {
    super(401, getMessage(message, MISSING_TOKEN_ERROR_MESSAGE))
  }
}

export class BadValueError extends SyntheticError {
  constructor(message?: string) {
    super(422, getMessage(message, BAD_VALUE_ERROR_MESSAGE))
  }
}

export const getMessage = (
  message: string | undefined,
  defaultMessage: string
): string => (message === undefined ? defaultMessage : message)
