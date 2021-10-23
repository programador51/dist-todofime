"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toDo_1 = __importDefault(require("../models/toDo"));
const GetTasks = async (req, res) => {
    try {
        const { rangeBegin: begin, noRegisters: limit, pages } = req.body;
        const tasks = await toDo_1.default.GetTasks(1, begin, limit);
        return res.status(200).json({
            status: 200,
            data: {
                tasks,
                pages,
                actualPage: +(req.query.pagina || 1),
            },
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            status: 500,
            error,
        });
    }
};
const AddTask = async (req, res) => {
    try {
        const { idUser, task } = req.body;
        await toDo_1.default.AddTask(idUser, task);
        return res.status(200).json({
            status: 200,
            message: 'Tarea agregada',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            status: 500,
            error,
            message: 'Error',
        });
    }
};
const DeleteTask = async (req, res) => {
    try {
        const { idTask } = req.body;
        await toDo_1.default.DeleteTask(idTask);
        return res.status(200).json({
            status: 200,
            message: 'Tarea borrada',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            status: 500,
            error,
            message: 'Error',
        });
    }
};
const UpdateCheckToDo = async (req, res) => {
    try {
        const { idTask, status } = req.body;
        await toDo_1.default.ToggleDone(idTask, status);
        return res.status(200).json({
            status: 200,
            message: 'Tarea marcada',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            status: 500,
            error,
            message: 'Error',
        });
    }
};
const UpdateTask = async (req, res) => {
    try {
        const { idTask, content } = req.body;
        console.log(req.body);
        await toDo_1.default.UpdateTask(idTask, content);
        return res.status(200).json({
            status: 200,
            message: 'Tare actualizada',
        });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({
            status: 500,
            error,
            message: 'Error',
        });
    }
};
exports.default = {
    GetTasks,
    AddTask,
    UpdateCheckToDo,
    DeleteTask,
    UpdateTask,
};
//# sourceMappingURL=toDo.js.map