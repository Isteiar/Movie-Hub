import axios from "axios";
import { IPaginateMoviesResponse } from "../interfaces/PaginatedMoviesResponse.interface";
import { IMovie } from "../interfaces/Movie.interface";

export const baseURL = "http://localhost:5000/api";

// const axiosInstance = axios.create({ baseURL: "http://localhost:5000/api" });

//get all movies from backend
// export const getAllMovies = async () => {
//     const response = await axios.get<IMovie[]>(`${baseURL}/movies`);
//     // console.log("response data: ", response.data);
//     return response.data;
// };

// //get paginated  movies from backend
// export const getPaginatedMovies = async (page: number, limit: number) => {
//   const response = await axios.get<IPaginateMoviesResponse>(
//     `${baseURL}/movies/paginatedMovies?pageNumber=${page}&pageSize=${limit}`
//   );
//   // console.log("response data: ", response.data.response);
//   return response.data;
// };


//get filtered or searched movies from backend
export const searchMovies = async (
  query: string,
  pageNumber: number,
  pageSize: number,
  genre?: string,
  release?: number,
  rating?: number
) => {
  const response = await axios.post(`${baseURL}/movies/filteredMovies`, {
    title: query,
    pageNumber,
    pageSize,
    genre,
    release,
    rating,
  });
  // console.log(response.data);
  return response.data;
};


//get single movie by movieId from backend
export const getSingleMovie = async (movieId: string) => {
  const response = await axios.get<IMovie>(
    `${baseURL}/movies/movie-details/${movieId}`
  );
  // console.log("response data: ", response.data);
  return response.data;
};