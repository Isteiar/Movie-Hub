import MovieCard from "../components/MovieCard";
import { IMovie } from "../interfaces/Movie.interface";
type MovieListPrpos = {
  movieList: IMovie[];
};

const AllMoviesPage = ({ movieList }: MovieListPrpos) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 grid grid-cols-5 gap-6 bg-gray-300">
      {movieList.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default AllMoviesPage;
