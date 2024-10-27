import { Types } from "mongoose";

export interface IGenre extends Document {
    name: string;
    movies: Types.ObjectId[];  
  }