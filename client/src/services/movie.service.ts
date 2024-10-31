import axios from "axios";
import { IMovie } from "../interfaces/Movie.interface";

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
