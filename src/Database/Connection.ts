import mongoose from 'mongoose'

export interface IConnection {
  getConnection(): any
}

export class Mongo implements IConnection {

  public getConnection(): mongoose.Connection {
    return mongoose.createConnection('mongodb://127.0.0.1', { dbName: 'twitrit' })
  }

}