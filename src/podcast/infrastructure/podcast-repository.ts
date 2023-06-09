import { getConnection } from "../../database";
import { AddPodcast } from "../domain/add-podcast";
import { Podcast } from "../domain/podcast";

export class PodcastRepository implements AddPodcast {
  async addPodcast(
    podcastId: number,
    podcastName: string,
    podcastProducer: string,
    podcastDuration: number,
    podcastCategoria: string
  ): Promise<Podcast | null> {
    const connection = await getConnection();
    try {
      const query = `INSERT INTO podcast (id, name, producer, duration, categoria) VALUES (?, ?, ?, ?, ?)`;
      const values = [
        podcastId,
        podcastName,
        podcastProducer,
        podcastDuration,
        podcastCategoria,
      ];
      await connection.query(query, values);

      // Crear un objeto Podcast con las propiedades correspondientes
      const podcast = new Podcast(
        podcastId,
        podcastName,
        podcastProducer,
        podcastDuration,
        podcastCategoria
      );

      // Devolver el objeto Podcast
      return podcast;
    } catch (error) {
      // Manejar cualquier error que ocurra durante la operación
      throw new Error(`Error al agregar el nuevo podcast: ${error}`);
    } finally {
      connection.end();
    }
  }
}
