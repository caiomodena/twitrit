import * as mongoose from 'mongoose'

export interface IConnection {
  getConnection(): any
}

export class Mongo implements IConnection {

  public getConnection(): mongoose.Connection {
    return mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' })
  }

}