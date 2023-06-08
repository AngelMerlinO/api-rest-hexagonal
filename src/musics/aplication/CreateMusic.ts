import { AddMusic } from "../domain/addMusic";

export class RegisterMusic {
  constructor(private readonly addMusic: AddMusic) {}

  async agregarMusic(
    musicId: string,
    musicTitle: string,
    musicGenre: string,
    musicArtist: string,
    musicAlbum: string,
    musicDuration: string
  ) {
    try {
      const music = await this.addMusic.addMusic(
        musicId,
        musicTitle,
        musicGenre,
        musicArtist,
        musicAlbum,
        musicDuration
      );
      if (!music) {
        throw new Error(`music ${musicTitle} no agregado`);
      }
      return music;
    } catch (error) {
      throw error;
    }
  }
}
