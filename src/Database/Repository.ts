export interface IRepository {

  findAll(): Promise<any[]>

  save(entity: any): Promise<any>

  findOne(id: any): Promise<any>

  delete(entity: any): Promise<any>
}
