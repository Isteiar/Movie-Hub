import { model, Schema } from "mongoose";
import { IGenre } from "../interfaces/Genre.interface";

const genreSchema = new Schema<IGenre>({
  name: { type: String, required: true, unique: true, trim: true },
});

export const GenreModel = model<IGenre>("Genre", genreSchema);
