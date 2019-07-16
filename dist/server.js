"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const Handler_1 = require("./User/Handler");
const Handler_2 = require("./App/Handler");
const application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use(cors());
application.get('/user', (new Handler_1.Handler()).get);
application.get('/user/:id', (new Handler_1.Handler()).get);
application.post('/user', (new Handler_1.Handler()).post);
application.patch('/user/:id', (new Handler_1.Handler()).patch);
application.delete('/user/:id', (new Handler_1.Handler()).delete);
application.use((new Handler_2.Handler()).error);
application.set('port', process.env.APP_PORT || 3007);
application.listen(application.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', application.get('port'), application.get('env'));
});
exports.default = application;
//# sourceMappingURL=server.js.map