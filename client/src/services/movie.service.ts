import axios from "axios";
import { IMovie } from "../interfaces/Movie.interface";
import { IPaginateMoviesResponse } from "../interfaces/PaginatedMoviesResponse.interface";

export const baseURL = "http://localhost:5000/api";

//get all movies from backend
export const getAllMovies = async () => {
  try {
    const response = await axios.get<IMovie[]>(`${baseURL}/movies`);
    // console.log("response data: ", response.data);
    return response.data;
  } catch (err) {
    console.log("Error fetching movies: ", err);
  }
};

//get paginated  movies from backend
export const getPaginatedMovies = async (page: number, limit: number) => {
  try {
    const response = await axios.get<IPaginateMoviesResponse>(
      `${baseURL}/movies/paginatedMovies?pageNumber=${page}&pageSize=${limit}`
    );
    // console.log("response data: ", response.data.response);
    return response.data;
  } catch (err) {
    console.log("Error fetching movies: ", err);
  }
};
