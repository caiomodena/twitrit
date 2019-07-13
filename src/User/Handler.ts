import { NextFunction, Request, Response } from 'express'
import * as mongoose from 'mongoose'
import { Repository as UserRepository } from './Repository'
import { IUserModel, UserSchema } from './Schema';

export class Handler {

  public async get(request: Request, response: Response, next: NextFunction) {

    try {

      const database = mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' })

      let userRepository = new UserRepository(database)

      response.json({
        items: await userRepository.findAll(),
        total: await userRepository.findCount()
      })

    } catch (error) {
      response
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

      user.validate()

      await userRepository.save(user)

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
}
