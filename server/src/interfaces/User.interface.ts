import { Document } from "mongoose";

// User Interface
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}
