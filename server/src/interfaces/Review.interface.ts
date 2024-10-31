import { Document, Types } from "mongoose";

export interface IReview extends Document {
  rating: number;
  review: string;
  user: Types.ObjectId;
  movie: Types.ObjectId;
}
