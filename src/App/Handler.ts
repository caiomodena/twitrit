import { NextFunction, Request, Response } from 'express'
import { DataNotFound } from './Error';

export class Handler {

  public error(error: Error, request: Request, response: Response, next: NextFunction) {
    console.error(error.name)

    let status = 500
    if (error.name == 'ValidationError' || error.name == 'MongoError') {
      status = 400
    }

    if (error instanceof DataNotFound) {
      status = 404
    }

    response
      .status(status)
      .json({
        "message": error.message
      })
  }

}
