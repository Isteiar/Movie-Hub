import { Request } from "express";
import { IUser } from "./User.interface";

export interface IAuthRequest extends Request {
    user?: IUser;
  }