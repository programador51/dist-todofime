"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDo_1 = __importDefault(require("../controller/toDo"));
const toDo_2 = __importDefault(require("../models/toDo"));
const pagination_1 = __importDefault(require("@/middlewares/pagination"));
const router = (0, express_1.Router)();
router.get('/', pagination_1.default.getPagination, toDo_2.default.GetNoTasks, pagination_1.default.calculatePages, toDo_1.default.GetTasks);
router.post('/', toDo_1.default.AddTask);
router.delete('/', toDo_1.default.DeleteTask);
router.put('/:idTask/actualizar-estado', toDo_1.default.UpdateCheckToDo);
router.put('/:idTask/contenido', toDo_1.default.UpdateTask);
exports.default = router;
//# sourceMappingURL=toDo.js.map