import { IMovie } from "./Movie.interface";

export interface IPaginateMoviesResponse {
  message: string;
  response: IMovie[];
  totalMovies: number;
}
