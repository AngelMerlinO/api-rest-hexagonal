import { getConnection } from "../../database";
import { AddMusic } from "../domain/addMusic";
import { Music } from "../domain/music";

export class AddMusicRepository implements AddMusic {
  async addMusic(
    musicId: string,
    musicTitle: string,
    musicGenre: string,
    musicArtist: string,
    musicAlbum: string,
    musicDuration: string
  ): Promise<Music | null> {
    const connection = await getConnection();
    try {
      const query = `INSERT INTO musics (id, title, genre, artist, album, duration) VALUES (?, ?, ?, ?, ?, ?)`;
      const values = [
        musicId,
        musicTitle,
        musicGenre,
        musicArtist,
        musicAlbum,
        musicDuration,
      ];
      await connection.query(query, values);

      // Crear un objeto Podcast con las propiedades correspondientes
      const music = new Music(
        musicId,
        musicTitle,
        musicGenre,
        musicArtist,
        musicAlbum,
        musicDuration
      );

      // Devolver el objeto Podcast
      return music;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la operación
      throw new Error(`Error al agregar la nueva musica: ${error}`);
    } finally {
      connection.end();
    }
  }
}
