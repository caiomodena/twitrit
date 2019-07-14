import { NextFunction, Request, Response } from 'express'
import { Repository } from './Repository'
import { Service } from './Service';

export class Handler {

  public async get(request: Request, response: Response, next: NextFunction) {

    try {

      if (request.params.id) {
        let user = await (new Service(new Repository())).retrieveUser(request.params.id)

        if (!user) {
          return response
            .status(404)
            .send()
        }

        return response.json(user)
      }

      let users = await (new Service(new Repository())).listUsers()

      return response.json({
        items: users
      })

    } catch (error) {

      return response
        .status(500)
        .json({
          "message": error.message
        })

    }

  }

  public async post(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).createNewUser(request.body)

      response
        .status(201)
        .json(user)

    } catch (error) {

      response
        .status(500)
        .json({
          "message": error.message
        })

    }

  }

  public async patch(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).retrieveUser(request.params.id)

      if (!user) {
        return response
          .status(404)
          .send()
      }

      user.name = request.body.name
      user.email = request.body.email

      await (new Service(new Repository())).updateUser(user)

      return response
        .status(201)
        .json(user)

    } catch (error) {

      return response
        .status(500)
        .json({
          "message": error.message
        })

    }

  }

  public async delete(request: Request, response: Response, next: NextFunction) {

    try {

      let user = await (new Service(new Repository())).retrieveUser(request.params.id)

      if (!user) {
        return response
          .status(404)
          .send()
      }

      await (new Service(new Repository())).removeUser(user)

      return response
        .status(204)
        .send()

    } catch (error) {

      return response
        .status(500)
        .json({
          "message": error.message
        })

    }

  }

}
