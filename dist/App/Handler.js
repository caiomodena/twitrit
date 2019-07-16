"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = require("./Error");
class Handler {
    error(error, request, response, next) {
        console.error(error.name);
        let status = 500;
        if (error.name == 'ValidationError' || error.name == 'MongoError') {
            status = 400;
        }
        if (error instanceof Error_1.DataNotFound) {
            status = 404;
        }
        response
            .status(status)
            .json({
            "message": error.message
        });
    }
}
exports.Handler = Handler;
//# sourceMappingURL=Handler.js.map