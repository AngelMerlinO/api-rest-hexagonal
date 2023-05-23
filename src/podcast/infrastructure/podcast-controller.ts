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

    const resultado = await this.registerPodcast.agregarPodcast(
      podcastId,
      podcastName,
      podcastProducer,
      podcastDuration,
      podcastCategoria
    );
    console.log("controller", resultado.name);
    res.status(200).send(`Usuario ${resultado.name} registrado con éxito`);
  }
}
