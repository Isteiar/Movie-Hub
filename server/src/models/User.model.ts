import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/User.interface";

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("User", userSchema);
