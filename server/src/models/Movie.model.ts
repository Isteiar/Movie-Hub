import { model, Schema } from "mongoose";
import { IMovie } from "../interfaces/Movie.interface";

const movieSchema = new Schema<IMovie>(
  {
    title: { type: String, required: true, trim: true },
    thumbnail: { type: String, required: [true, "Movie thumnail is required"] },
    duration: { type: Number, required: true },
    description: {
      type: String,
      required: [true, "Movie description is required"],
    },
    release: { type: Date, required: true },
    genres: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    averageRating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const MovieModel = model<IMovie>("Movie", movieSchema);
