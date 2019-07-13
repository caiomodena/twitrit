import { IUserModel, UserSchema } from './Schema'
import { Connection, Model } from 'mongoose'
import { MongoError } from 'mongodb'

export class Repository {

  readonly Model: Model<IUserModel>

  public constructor (public readonly database: Connection) {
    this.Model = database.model<IUserModel>('User', UserSchema)
  }

  public async findAll(): Promise<IUserModel[]> {
    return this.Model.find()
  }

  public async findCount(): Promise<number> {
    return this.Model.count({})
  }

  public async save(user: IUserModel): Promise<IUserModel> {
    return this.Model.create(user)
  }

}