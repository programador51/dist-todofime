"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const http_1 = require("http");
const config_1 = __importDefault(require("./config"));
const startServer = (app) => {
    const httpServer = (0, http_1.createServer)(app);
    return httpServer.listen({ port: config_1.default.APP.PORT }, () => {
        process.stdout.write(`⚙️  Application Environment: ${config_1.default.APP.ENV}\n`);
        process.stdout.write('📚 Debug logs are ENABLED\n');
        process.stdout.write(`🚀 LABNOTE-API Server ready at http://localhost:${config_1.default.APP.PORT}\n`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map