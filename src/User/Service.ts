import { IRepository } from "../Database/Repository";
import { IUser } from './Entity';
import { DataNotFound } from "../App/Error";

export class Service {

  readonly Repository: IRepository

  constructor(repository: IRepository) {
    this.Repository = repository
  }

  public async create(user: IUser): Promise<IUser> {
    return this.Repository.save(user)
  }

  public async update(id: string, newUserData: IUser): Promise<IUser> {
    let user = await this.detail(id)

    if (newUserData.name) {
      user.name = newUserData.name
    }

    if (newUserData.email) {
      user.email = newUserData.email
    }

    return this.Repository.save(user)
  }

  public async list(): Promise<IUser[]> {
    return await this.Repository.findAll()
  }

  public async detail(id?: string): Promise<IUser> {
    let user = await this.Repository.findOne(id)

    if (!user) {
      throw new DataNotFound(`user with id ${id} not found`)
    }

    return user
  }

  public async removeUser(id: string): Promise<IUser> {
    let user = await this.detail(id)

    return this.Repository.delete(user)
  }

}
