import { RegisterMusic } from "../aplication/CreateMusic";
import { GetAllMusics } from "../aplication/GetAllMusicsUseCase";
import { AddMusicController } from "./addMusic-controller";
import { InMemoryMusicRepository } from "./in-memory-music-repository";
import { MusicController } from "./music-controller";
import { AddMusicRepository } from "./music-repository";

const musicRepository = new InMemoryMusicRepository();
const getAllMusicsUseCase = new GetAllMusics(musicRepository);
const musicController = new MusicController(getAllMusicsUseCase); // Agrega esta línea

export { getAllMusicsUseCase, musicController };

const musicRepositor = new AddMusicRepository();
export const registerMusic = new RegisterMusic(musicRepositor);
export const addMusicContoller = new AddMusicController(registerMusic);
