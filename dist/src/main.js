"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const music_router_1 = require("./musics/infrastructure/music-router");
const podcast_router_1 = require("./podcast/infrastructure/podcast-router");
const user_router_1 = require("./user/infrastructure/user-router");
function boostrap() {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use("/users", user_router_1.userRouter);
    app.use("/music", music_router_1.musicRouter);
    app.use("/podcast", podcast_router_1.podcastRouter);
    const { port } = config_1.config.server;
    app.listen(port, () => {
        console.log(`[APP] - Starting application on port ${port}`);
    });
}
boostrap();
