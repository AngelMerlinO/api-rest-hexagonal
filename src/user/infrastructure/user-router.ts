import express from "express";

import { userController } from "./dependencies";

const userRouter = express.Router();

userRouter.post("/:id/find", userController.run.bind(userController));

export { userRouter };
