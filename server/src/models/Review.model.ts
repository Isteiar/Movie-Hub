import { model, Schema } from "mongoose";
import { IReview } from "../interfaces/Review.interface";

const reviewSchema = new Schema<IReview>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    movie: { type: Schema.Types.ObjectId, ref: "Movie", required: true },
    rating: { type: Number, required: true, min: 1, max: 10 },
    review: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

// Add compound index to ensure a user can only review a movie once
reviewSchema.index({ user: 1, movie: 1 }, { unique: true });

export const ReviewModel = model<IReview>("Review", reviewSchema);
