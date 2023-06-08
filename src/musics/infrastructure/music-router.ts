import express from "express";

import { musicController } from "./dependencies"; // Corregir la ruta de importación
import { addMusicContoller } from "./dependencies"; // Corregir la ruta de importación

const musicRouter = express.Router();
musicRouter.get("/", musicController.getAllMusics.bind(musicController));
musicRouter.post("/", addMusicContoller.agregarMusic.bind(addMusicContoller));

export { musicRouter };
