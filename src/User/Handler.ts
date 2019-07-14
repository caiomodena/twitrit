import { NextFunction, Request, Response } from 'express'
import { Repository } from './Repository'
import { Service } from './Service';

export class Handler {

  public async get(request: Request, response: Response, next: NextFunction) {

    try {

      if (request.params.id) {
        let user = await (new Service(new Repository())).retrieveUser(request.params.id)

        if (!user) {
          response
            .status(404)
            .send()
        }

        response.json(user)
      }

      let users = await (new Service(new Repository())).listUsers()

      response.json({
        items: users
      })

    } catch (error) {
      next(error)
    }

  }

  public async post(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).createNewUser(request.body)

      response
        .status(201)
        .json(user)

    } catch (error) {
      next(error)
    }

  }

  public async patch(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).retrieveUser(request.params.id)

      if (!user) {
        response
          .status(404)
          .send()
      }

      if (request.body.name) {
        user.name = request.body.name
      }

      if (request.body.email) {
        user.email = request.body.email
      }

      await (new Service(new Repository())).updateUser(user)

      response
        .status(201)
        .json(user)

    } catch (error) {
      next(error)
    }

  }

  public async delete(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).retrieveUser(request.params.id)

      if (!user) {
        response
          .status(404)
          .send()
      }

      await (new Service(new Repository())).removeUser(user)

      response
        .status(204)
        .send()

    } catch (error) {
      next(error)
    }

  }

}
