"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies"); // Corregir la ruta de importación
const musicRouter = express_1.default.Router();
exports.musicRouter = musicRouter;
musicRouter.get("/", dependencies_1.musicController.getAllMusics.bind(dependencies_1.musicController));
