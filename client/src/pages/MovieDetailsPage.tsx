import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/Movie.interface";
import { Link, useParams } from "react-router-dom";
import { getSingleMovie } from "../services/movie.service";
import { getTimeFromString, getYearFromString } from "../util";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";
import { getLoggedInUserInfo } from "../services/auth.services";
import { IUser } from "../interfaces/User.interface";
import Navbar from "../components/Navbar";
import { Rating } from "react-simple-star-rating";

const MovieDetailsPage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<IUser | undefined>();
  const [alreadyReviewed, setAlreadyReviewed] = useState<boolean>(false);

  const fetchingMovie = async () => {
    if (movieId) {
      const data = await getSingleMovie(movieId);
      //   console.log("my movie data", data);
      if (data) {
        setMovie(data);
      }
    }
  };

  useEffect(() => {
    fetchingMovie();
  }, [movieId]);

  const fetchLoggedInUser = async () => {
    try {
      const loggedInUser = await getLoggedInUserInfo();
      // console.log(loggedInUser);
      setLoggedInUser(loggedInUser);
    } catch (error) {
      setLoggedInUser(undefined);
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  useEffect(() => {
    if (!loggedInUser) {
      setAlreadyReviewed(false);
    }
    const userId = loggedInUser?._id;
    const reviewedBy = movie?.reviews.map((el) => el.user._id);
    setAlreadyReviewed(!!reviewedBy?.includes(userId));
  }, [movie, loggedInUser]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 max-w-7xl mx-auto min-h-screen pt-20  p-8 ">
        <div className="shadow-sm">
          {movie && (
            <div className="flex gap-8 ">
              <img
                src={movie.thumbnail}
                alt={`${movie.title} poster`}
                className="w-66 h-76"
              />
              <ul className="pl-12 my-8 ">
                <li className="text-lg"> {movie.description}</li>
                <li className="text-3xl pt-4">{movie.title}</li>
                <li className="text-md">
                  Duration:{" "}
                  {movie && movie.duration
                    ? getTimeFromString(movie.duration)
                    : ""}
                </li>
                <li className="text-md">
                  Release:
                  {movie && movie.release
                    ? getYearFromString(movie.release)
                    : ""}
                </li>
                {movie.genres && <li className="text-md">Genre: </li>}
                <li className="text-md">
                  Average rating:{" "}
                  <Rating
                    initialValue={movie.averageRating}
                    allowFraction
                    size={30}
                    readonly
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        {movieId && loggedInUser ? (
          !alreadyReviewed && (
            <ReviewForm
              newReviewAddedCallback={() => {
                fetchingMovie();
              }}
              movieId={movieId}
            />
          )
        ) : (
          <div className="py-4">
            You can't review movies if you are not logged in. Please{" "}
            <Link
              to="/login"
              className=" font-medium text-primary-600 hover:underline  text-primary-600 text-blue-600 ml-1"
            >
              Log in
            </Link>{" "}
            to review
          </div>
        )}
        <div>
          {movie?.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
