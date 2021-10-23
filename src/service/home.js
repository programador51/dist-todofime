"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppInfo = void 0;
const config_1 = __importDefault(require("@/config"));
const getAppInfo = () => {
    return config_1.default.APP;
};
exports.getAppInfo = getAppInfo;
//# sourceMappingURL=home.js.map