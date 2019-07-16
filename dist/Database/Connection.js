"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Mongo {
    getConnection() {
        return mongoose.createConnection('mongodb://mongo', { dbName: 'twitrit' });
    }
}
exports.Mongo = Mongo;
//# sourceMappingURL=Connection.js.map