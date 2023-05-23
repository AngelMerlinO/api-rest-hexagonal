"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.podcastRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const podcastRouter = express_1.default.Router();
exports.podcastRouter = podcastRouter;
podcastRouter.post("/", dependencies_1.podcastController.agregarPodcast.bind(dependencies_1.podcastController));
