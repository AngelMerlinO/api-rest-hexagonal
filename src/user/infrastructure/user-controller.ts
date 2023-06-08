import { Request, Response } from "express";

import { FindUser } from "../application/find-user";

export class UserController {
  constructor(private readonly findUser: FindUser) {}

  async run(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    const result = await this.findUser.run(userId);
    res.status(200).send(`usuario encontrado ${JSON.stringify(result)}`);
  }
}
