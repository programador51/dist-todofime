"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection('mysql://uoyhj7ltnfmdggnw:3Esx747eWUr965u5Qmbu@bxmhvlovhfcqp18uinjs-mysql.services.clever-cloud.com:3306/bxmhvlovhfcqp18uinjs');
connection.connect((e) => {
    if (e) {
        console.log(`■ There was an error connecting to DB ${e}`);
        return;
    }
    console.log(`■ Connected to db success`);
});
function reconnect() {
    connection.connect((e) => {
        console.log('Reconnecting...');
        if (e) {
            console.log(e);
            return;
        }
    });
}
connection.on('error', (error) => reconnect());
exports.default = connection;
//# sourceMappingURL=db.js.map