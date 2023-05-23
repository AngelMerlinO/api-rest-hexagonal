"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
function getConnection() {
    return promise_1.default.createConnection({
        host: "sql10.freesqldatabase.com",
        user: "sql10619742",
        password: "9mFwwBqtAv",
        port: 3306,
        database: "sql10619742",
    });
}
exports.getConnection = getConnection;
