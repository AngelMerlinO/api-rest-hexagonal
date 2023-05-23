import { Podcast } from "./podcast";

export interface AddPodcast {
  addPodcast(
    podcastId: number,
    podcastName: string,
    podcastProducer: string,
    podcastDuration: number,
    podcastCategoria: string
  ): Promise<Podcast | null>;
}
