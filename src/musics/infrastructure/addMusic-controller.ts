import { Request, Response } from "express";

import { RegisterMusic } from "../aplication/CreateMusic";

export class AddMusicController {
  constructor(private readonly registerMusic: RegisterMusic) {}

  async agregarMusic(req: Request, res: Response) {
    const musicId = req.body.id;
    const musicTitle = req.body.title;
    const musicGenre = req.body.genre;
    const musicArtist = req.body.artist;
    const musicAlbum = req.body.album;
    const musicDuration = req.body.duration;

    const resultado = await this.registerMusic.agregarMusic(
      musicId,
      musicTitle,
      musicGenre,
      musicArtist,
      musicAlbum,
      musicDuration
    );
    console.log("controller", resultado.title);
    res
      .status(200)
      .send(
        `La musiquita que os pidio en exitos 20-21 ${resultado.title} registrado con éxito`
      );
  }
}
