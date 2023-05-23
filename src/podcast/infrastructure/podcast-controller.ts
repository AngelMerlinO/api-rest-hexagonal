import { Request, Response } from "express";

import { RegisterPodcast } from "../aplication/registerPodcast";

export class PodcastController {
  constructor(private readonly registerPodcast: RegisterPodcast) {}

  async agregarPodcast(req: Request, res: Response) {
    const podcastId = req.body.id;
    const podcastName = req.body.name;
    const podcastProducer = req.body.producer;
    const podcastDuration = req.body.duration;
    const podcastCategoria = req.body.categoria;

    console.log("holA", req.body.id);

    const resultado = await this.registerPodcast.agregarPodcast(
      podcastId,
      podcastName,
      podcastProducer,
      podcastDuration,
      podcastCategoria
    );

    res.status(200).send(`Usuario ${resultado} registrado con éxito`);
  }
}
