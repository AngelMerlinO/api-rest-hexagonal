import { AddPodcast } from "../domain/add-podcast";

export class RegisterPodcast {
  constructor(private readonly addPodcast: AddPodcast) {}

  async agregarPodcast(
    podcastId: number,
    podcastName: string,
    podcastProducer: string,
    podcastDuration: number,
    podcastCategoria: string
  ) {
    try {
      const podcast = await this.addPodcast.addPodcast(
        podcastId,
        podcastName,
        podcastProducer,
        podcastDuration,
        podcastCategoria
      );
      if (!podcast) {
        throw new Error(`podcast ${podcastName} no agregado`);
      }
      return podcast;
    } catch (error) {
      throw error;
    }
  }
}
