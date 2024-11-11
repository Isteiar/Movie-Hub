import { Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../models/User.model";
import { IUser } from "../interfaces/User.interface";
import { IAuthRequest } from "../interfaces/AuthRequest.interface";

export const authMiddleware = async (
  req: IAuthRequest,
  res: Response,
  next: Function
) => {
  const authHeaders = req.headers["authorization"];

  if (!authHeaders) {
    res.sendStatus(403);
    return;
  }

  const token = authHeaders.split(" ")[1];

  try {
    //verify & decode token
    const verifiedToken = verify(token, process.env.SECRET as string);

    // console.log(verifiedToken);
    if (typeof verifiedToken !== "string") {
      const user: IUser | null = await UserModel.findOne({
        _id: verifiedToken.id,
      });
      if (!user) {
        res.sendStatus(401);
        return;
      } 
      req.user = user;
      // console.log(req.user);
    } else {
      res.status(404).send({ message: "User not found" });
    }

    next();
  } catch (err) {
    res.sendStatus(401);
  }
};
