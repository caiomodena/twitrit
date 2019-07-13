import { NextFunction, Request, Response } from 'express'
import * as mongoose from 'mongoose'
import { Repository as UserRepository } from './Repository'
import { IUserModel, UserSchema } from './Schema';

export class Handler {

  public async get(request: Request, response: Response, next: NextFunction) {

    try {

      const database = mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' })

      let userRepository = new UserRepository(database)

      return response.json({
        items: await userRepository.findAll(),
        total: await userRepository.findCount()
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

      const database = mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' })

      let userRepository = new UserRepository(database)

      let UserModel = database.model<IUserModel>('User', UserSchema)

      let user = new UserModel(request.body)

      await userRepository.save(user)

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

  public async patch(request: Request, response: Response, next: NextFunction) {
    try {

      const database = mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' })

      let userRepository = new UserRepository(database)

      let UserModel = database.model<IUserModel>('User', UserSchema)

      let user = await userRepository.findOne(request.params.id)

      if (!user) {
        return response
          .status(404)
          .send()
      }

      user.name = request.body.name
      user.email = request.body.email

      await userRepository.save(user)

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

      const database = mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' })

      let userRepository = new UserRepository(database)

      let UserModel = database.model<IUserModel>('User', UserSchema)

      let user = await userRepository.findOne(request.params.id)

      if (!user) {
        return response
          .status(404)
          .send()
      }

      await userRepository.delete(user)

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
