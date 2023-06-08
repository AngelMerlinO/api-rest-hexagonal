import { Music } from "./music";

export interface AddMusic {
  addMusic(
    musicId: string,
    musicTitle: string,
    musicGenre: string,
    musicArtist: string,
    musicAlbum: string,
    musicDuration: string
  ): Promise<Music | null>;
}
