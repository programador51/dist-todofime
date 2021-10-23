"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("@/routes"));
const toDo_1 = __importDefault(require("@/routes/toDo"));
const createApp = () => {
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(helmet_1.default());
    app.use(morgan_1.default('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({
        extended: true,
    }));
    app.use('/', routes_1.default);
    app.use('/tareas', toDo_1.default);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map