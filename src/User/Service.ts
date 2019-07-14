import { IRepository } from "../Database/Repository";
import { IUser } from './Entity';

export class Service {

  readonly Repository: IRepository

  constructor(repository: IRepository) {
    this.Repository = repository
  }

  public async createNewUser(user: IUser): Promise<IUser> {
    return this.Repository.save(user)
  }

  public async updateUser(user: IUser): Promise<IUser> {
    return this.Repository.save(user)
  }

  public async listUsers(): Promise<IUser[]> {
    return this.Repository.findAll()
  }

  public async retrieveUser(id: string): Promise<IUser> {
    return this.Repository.findOne(id)
  }

  public async removeUser(user: IUser): Promise<IUser> {
    return this.Repository.delete(user)
  }

}
