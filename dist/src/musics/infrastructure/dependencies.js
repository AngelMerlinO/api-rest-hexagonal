"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicController = exports.getAllMusicsUseCase = void 0;
const GetAllMusicsUseCase_1 = require("../aplication/GetAllMusicsUseCase");
const in_memory_music_repository_1 = require("./in-memory-music-repository");
const music_controller_1 = require("./music-controller");
const musicRepository = new in_memory_music_repository_1.InMemoryMusicRepository();
const getAllMusicsUseCase = new GetAllMusicsUseCase_1.GetAllMusics(musicRepository);
exports.getAllMusicsUseCase = getAllMusicsUseCase;
const musicController = new music_controller_1.MusicController(getAllMusicsUseCase); // Agrega esta línea
exports.musicController = musicController;
