import { Types } from "mongoose";

export interface IReview extends Document {
  user: Types.ObjectId;
  movie: Types.ObjectId;
  rating: number;
  review: string;
}
