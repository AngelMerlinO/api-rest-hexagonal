"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.podcastController = exports.registerPodcast = void 0;
const registerPodcast_1 = require("../aplication/registerPodcast");
const podcast_controller_1 = require("./podcast-controller");
const podcast_repository_1 = require("./podcast-repository");
const podcastRepository = new podcast_repository_1.PodcastRepository();
exports.registerPodcast = new registerPodcast_1.RegisterPodcast(podcastRepository);
exports.podcastController = new podcast_controller_1.PodcastController(exports.registerPodcast);
