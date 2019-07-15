import { NextFunction, Request, Response } from 'express'
import { Repository } from './Repository'
import { Service } from './Service';

export class Handler {

  public async get(request: Request, response: Response, next: NextFunction) {

    try {

      if (request.params.id) {

        let user = await (new Service(new Repository())).detail(request.params.id)

        response
          .status(200)
          .json(user)

      }

      let users = await (new Service(new Repository())).list()

      response
        .status(200)
        .json({
          items: users
        })

    } catch (error) {
      next(error)
    }

  }

  public async post(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).create(request.body)

      response
        .status(201)
        .json(user)

    } catch (error) {
      next(error)
    }

  }

  public async patch(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).update(request.params.id, request.body)

      response
        .status(200)
        .json(user)

    } catch (error) {
      next(error)
    }

  }

  public async delete(request: Request, response: Response, next: NextFunction) {

    try {

      await (new Service(new Repository())).removeUser(request.params.id)

      response
        .status(204)
        .send()

    } catch (error) {
      next(error)
    }

  }

}
