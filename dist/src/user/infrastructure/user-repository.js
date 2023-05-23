"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../../database");
const user_1 = require("../domain/user");
class UserRepository {
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield (0, database_1.getConnection)();
            const rows = yield connection.query("SELECT * FROM users WHERE id = ?", [userId]);
            // Aquí debes usar el método adecuado para liberar la conexión en tu biblioteca de bases de datos
            if (rows.length === 0) {
                return null;
            }
            const user = rows[0];
            console.log("hola", rows[0], user[0].id); //si tiene datos la consulta, nunca esta vacio
            return new user_1.User(user[0].id, user[0].name, user[0].username, user[0].password, user[0].email);
        });
    }
}
exports.UserRepository = UserRepository;
