import { CustomError } from './custom-error'

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor(message = 'Not found', statusCode = 404) {
    super(message)
    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor)
  }
}
