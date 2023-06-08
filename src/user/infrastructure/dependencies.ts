import { FindUser } from "../application/find-user";
import { UserController } from "./user-controller";
import { UserRepository } from "./user-repository";

const userRepository = new UserRepository();
export const findUser = new FindUser(userRepository);
export const userController = new UserController(findUser);
