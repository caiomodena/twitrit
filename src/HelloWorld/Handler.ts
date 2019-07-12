import { NextFunction, Request, Response } from 'express'

export class Handler {

  public async get (request: Request, response: Response, next: NextFunction) {
    response.send('Hello World')
  }
}
