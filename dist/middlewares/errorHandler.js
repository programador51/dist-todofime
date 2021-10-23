"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericErrorHandler = exports.notFoundError = void 0;
const errors = __importStar(require("@/utils/error"));
const http_status_1 = __importDefault(require("http-status"));
const notFoundError = (req, res, next) => {
    const NOT_FOUND_CODE = http_status_1.default.NOT_FOUND;
    res.status(NOT_FOUND_CODE).json({
        error: {
            code: NOT_FOUND_CODE,
            message: http_status_1.default[NOT_FOUND_CODE],
        },
    });
};
exports.notFoundError = notFoundError;
const genericErrorHandler = (err, req, res, next) => {
    if (err.stack) {
        process.stdout.write('Error stack trace: ', err.stack);
    }
    const error = errors.buildError(err);
    res.status(error.code).json({ error });
};
exports.genericErrorHandler = genericErrorHandler;
//# sourceMappingURL=errorHandler.js.map