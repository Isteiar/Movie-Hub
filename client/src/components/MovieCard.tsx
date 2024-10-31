import { IMovie } from "../interfaces/Movie.interface";

type MovieProps = {
  movie: IMovie;
};

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="max-w-sm bg-slate-100 p-2 rounded-md ">
      <div>
        <img
          className="w-full h-64 object-cover"
          src={movie.thumbnail}
          alt={`${movie.title} Poster`}
        />
      </div>
      <div>
        <div className="text-2xl">{movie.title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
