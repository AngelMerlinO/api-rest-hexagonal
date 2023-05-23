"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.bienvenidaSender = void 0;
const bienvenida_sender_1 = require("../application/bienvenida-sender");
const user_controller_1 = require("./user-controller");
const user_repository_1 = require("./user-repository");
const userRepository = new user_repository_1.UserRepository();
exports.bienvenidaSender = new bienvenida_sender_1.BienvenidaSender(userRepository);
exports.userController = new user_controller_1.UserController(exports.bienvenidaSender);
