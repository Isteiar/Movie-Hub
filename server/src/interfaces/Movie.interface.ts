import { Types } from "mongoose";

export interface IMovie extends Document {
  title: string;
  thumbnail: string;
  description: string;
  release: Date;
  duration: number;
  genres: Types.ObjectId[];
  reviews: Types.ObjectId[];
  averageRating?: number;
}
