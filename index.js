"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@', __dirname);
const app_1 = require("./app");
const server_1 = require("./server");
if (process.env.NODE_ENV !== 'test') {
    const app = app_1.createApp();
    server_1.startServer(app);
}
//# sourceMappingURL=index.js.map