"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = require("../App/Error");
class Service {
    constructor(repository) {
        this.Repository = repository;
    }
    async create(user) {
        return this.Repository.save(user);
    }
    async update(id, newUserData) {
        let user = await this.detail(id);
        if (newUserData.name) {
            user.name = newUserData.name;
        }
        if (newUserData.email) {
            user.email = newUserData.email;
        }
        return this.Repository.save(user);
    }
    async list() {
        return await this.Repository.findAll();
    }
    async detail(id) {
        let user = await this.Repository.findOne(id);
        if (!user) {
            throw new Error_1.DataNotFound(`user with id ${id} not found`);
        }
        return user;
    }
    async removeUser(id) {
        let user = await this.detail(id);
        return this.Repository.delete(user);
    }
}
exports.Service = Service;
//# sourceMappingURL=Service.js.map