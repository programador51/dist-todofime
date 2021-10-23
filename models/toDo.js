"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
const GetTasks = (idUser, begin = 0, limit = 10) => {
    return new Promise((resolve, reject) => {
        db_1.default.query(`



        SELECT 
        
        id AS id,
        description AS description,
        createdDate AS createdDate,
        
        IF(completed = 1, 'Si','No') AS completed,

        IF(completed = 1, TRUE , FALSE) AS boolCompleted

        FROM tasks WHERE userId = ?
        
        AND logicalErase = 0

        ORDER BY createdDate DESC , logicalErase ASC

        LIMIT ?,?
        ;

        `, [idUser, begin, limit], (error, result, fileds) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(result);
        });
    });
};
const AddTask = (idUser, task) => {
    return new Promise((resolve, reject) => {
        db_1.default.query(`
        INSERT INTO tasks
            (description,userId) VALUES (?,?)
        `, [task, idUser], (error, result, fileds) => {
            if (error) {
                console.log(error);
                reject(false);
            }
            console.log(result);
            resolve(true);
        });
    });
};
const DeleteTask = (idTask) => {
    return new Promise((resolve, reject) => {
        db_1.default.query(`
        
        UPDATE tasks SET logicalErase = 1 WHERE id = ?

        `, idTask, (error, result, fileds) => {
            if (error) {
                console.log(error);
                reject(false);
            }
            console.log(result);
            resolve(true);
        });
    });
};
const ToggleDone = (idTask, status = 1) => {
    return new Promise((resolve, reject) => {
        db_1.default.query(`UPDATE tasks SET completed = ? WHERE id = ?`, [status, idTask], (error, result, fields) => {
            if (error) {
                console.log(error);
                reject(false);
            }
            resolve(true);
        });
    });
};
const GetNoTasks = (req, res, next) => {
    db_1.default.query(`SELECT COUNT(*) AS noTasks FROM tasks WHERE userId = 1 AND logicalErase = 0`, 1, (error, result, fields) => {
        if (error) {
            console.log(error);
            return res.status(200).json({
                status: 500,
                error,
            });
        }
        req.body.recordsets = result[0]['noTasks'];
        next();
    });
};
const UpdateTask = (idTask, content) => {
    return new Promise((resolve, reject) => {
        db_1.default.query(`UPDATE tasks SET description = ? WHERE id = ?`, [content, idTask], (error, result, fields) => {
            if (error) {
                console.log(error);
                reject(false);
            }
            resolve(true);
        });
    });
};
exports.default = {
    GetTasks,
    AddTask,
    DeleteTask,
    ToggleDone,
    UpdateTask,
    GetNoTasks,
};
//# sourceMappingURL=toDo.js.map