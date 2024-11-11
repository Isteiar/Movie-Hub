import { Link } from "react-router-dom";
import { IMovie } from "../interfaces/Movie.interface";
import { CiCirclePlus } from "react-icons/ci";

type MovieProps = {
  movie: IMovie;
};

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="w-1/5 relative transition delay-150 hover:scale-105 duration-300">
      <Link to={`/movie-details/${movie._id}`}>
        <img
          src={movie.thumbnail}
          alt={`${movie.title} Poster`}
          className=" h-full"
          />
      </Link>
      <div className=" absolute flex justify-between items-center  bottom-0 w-full px-4 py-2 bg-gray-800 opacity-50 hover:opacity-80 gap-2">
        <h4 className="text-xl text-white  opacity-100">{movie.title}</h4>
        <h4 className="text-3xl text-white  opacity-100">
          <CiCirclePlus className="hover:text-orange-500" />
        </h4>
      </div>
    </div>
  );
};

export default MovieCard;
