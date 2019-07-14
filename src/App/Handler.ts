import { NextFunction, Request, Response } from 'express'
import { MongoError } from 'mongodb';

export class Handler {

  public error(error: Error, request: Request, response: Response, next: NextFunction) {
    console.error(error.name)

    let status = 500
    if (error.name == 'ValidationError' || error.name == 'MongoError') {
      status = 400
    }

    response
      .status(status)
      .json({
        "message": error.message
      })
  }

}
