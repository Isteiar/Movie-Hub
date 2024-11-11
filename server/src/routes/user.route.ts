import { Router } from "express";
import {
  login,
  createUser,
  getAllUsers,
  getLoggedInUserInfo,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter.post("/resgister", createUser);
userRouter.post("/login", login);

userRouter.get("/", getAllUsers);
userRouter.get("/logged-in-user", authMiddleware, getLoggedInUserInfo);

export default userRouter;
