import { RegisterPodcast } from "../aplication/registerPodcast";
import { PodcastController } from "./podcast-controller";
import { PodcastRepository } from "./podcast-repository";

const podcastRepository = new PodcastRepository();
export const registerPodcast = new RegisterPodcast(podcastRepository);
export const podcastController = new PodcastController(registerPodcast);
