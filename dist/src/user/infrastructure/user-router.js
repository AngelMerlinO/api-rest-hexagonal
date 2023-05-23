"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post("/:id/bienvenida", dependencies_1.userController.run.bind(dependencies_1.userController));
