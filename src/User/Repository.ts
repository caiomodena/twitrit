import { IUserModel, UserSchema } from './Schema'
import { Connection } from 'mongoose'
import { Mongo } from '../Database/Connection';
import { IUser } from './Entity';
import { IRepository } from "../Database/Repository";

export class Repository implements IRepository {

  readonly Connection: Connection

  public constructor () {
    this.Connection = (new Mongo()).getConnection()
  }

  public async findAll(): Promise<IUser[]> {
    return this.Connection.model<IUserModel>('User', UserSchema).find({})
  }

  public async save(user: IUser): Promise<IUser> {
    let UserModel = this.Connection.model<IUserModel>('User', UserSchema)

    let userModel = new UserModel(user)

    userModel.validate()

    return userModel.save()
  }

  public async findOne(id: string): Promise<IUser> {
    return this.Connection.model<IUserModel>('User', UserSchema).findById(id)
  }

  public async delete(user: IUser): Promise<IUser> {
    let UserModel = this.Connection.model<IUserModel>('User', UserSchema)

    let userModel = new UserModel(user)

    return userModel.remove()
  }

}
