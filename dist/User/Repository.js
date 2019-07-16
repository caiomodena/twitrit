"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = require("./Schema");
const Connection_1 = require("../Database/Connection");
class Repository {
    constructor() {
        this.Connection = (new Connection_1.Mongo()).getConnection();
    }
    async findAll() {
        return this.Connection.model('User', Schema_1.UserSchema).find({});
    }
    async save(user) {
        let UserModel = this.Connection.model('User', Schema_1.UserSchema);
        let userModel = new UserModel(user);
        await userModel.validate();
        return userModel.save();
    }
    async findOne(id) {
        return this.Connection.model('User', Schema_1.UserSchema).findById(id);
    }
    async delete(user) {
        let UserModel = this.Connection.model('User', Schema_1.UserSchema);
        let userModel = new UserModel(user);
        return userModel.remove();
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map