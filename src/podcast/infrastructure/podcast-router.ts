import express from "express";

import { podcastController } from "./dependencies";

const podcastRouter = express.Router();

podcastRouter.post(
  "/",
  podcastController.agregarPodcast.bind(podcastController)
);
export { podcastRouter };
