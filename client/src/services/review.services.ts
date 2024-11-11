import axios from "axios";
import { baseURL } from "./movie.service";
import { getToken } from "./token.services";

export const addReview = async (
  movieId: string,
  review: string,
  rating: number
) => {
  const response = await axios.post(
    `${baseURL}/reviews/add-review`,
    { review, rating, movieId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": `application/json`,
      },
    }
  );
  return response.data;
};


// //get all reviews
// export const getAllReviews = async () => {
//   const response = await axios.get(`${baseURL}/reviews/`);
//   return response.data;
// };
