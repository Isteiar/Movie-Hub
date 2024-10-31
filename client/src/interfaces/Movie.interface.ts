import { IGenre } from "./Genre.interface";
import { IReview } from "./Review.interface";

export interface IMovie {
  _id: string;
  title: string;
  thumbnail: string;
  description: string;
  release: Date;
  duration: number;
  genres: IGenre[];
  reviews: IReview[];
  averageRating?: number;
}
