"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = require("./Repository");
const Service_1 = require("./Service");
class Handler {
    async get(request, response, next) {
        try {
            if (request.params.id) {
                let user = await (new Service_1.Service(new Repository_1.Repository())).detail(request.params.id);
                response
                    .status(200)
                    .json(user);
            }
            let users = await (new Service_1.Service(new Repository_1.Repository())).list();
            response
                .status(200)
                .json({
                items: users
            });
        }
        catch (error) {
            next(error);
        }
    }
    async post(request, response, next) {
        try {
            let user = await (new Service_1.Service(new Repository_1.Repository())).create(request.body);
            response
                .status(201)
                .json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async patch(request, response, next) {
        try {
            let user = await (new Service_1.Service(new Repository_1.Repository())).update(request.params.id, request.body);
            response
                .status(200)
                .json(user);
        }
        catch (error) {
            next(error);
        }
    }
    async delete(request, response, next) {
        try {
            await (new Service_1.Service(new Repository_1.Repository())).removeUser(request.params.id);
            response
                .status(204)
                .send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map