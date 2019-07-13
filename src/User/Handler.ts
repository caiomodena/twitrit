import { NextFunction, Request, Response } from 'express'
import * as mongoose from 'mongoose'
import { Repository as UserRepository} from './Repository'

export class Handler {

  public async get (request: Request, response: Response, next: NextFunction) {

    const database = mongoose.createConnection('mongodb://mongo', {dbName: 'twitrit'})

    let userRepository = new UserRepository(database)

    response.json({
      itens: await userRepository.findAll(),
      total: await userRepository.findCount()
    })
  }

  public async post (request: Request, response: Response, next: NextFunction) {

  }
}
