import { Router } from "express";
import { login, createUser, getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/resgister", createUser);
userRouter.post("/login", login);

userRouter.get("/", getAllUsers);

export default userRouter;
