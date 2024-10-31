import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import MovieCard from "../components/MovieCard";
import { IMovie } from "../interfaces/Movie.interface";
type MovieListPrpos = {
  movieList: IMovie[];
  currentPage: number;
  handlePreviousButton: () => void;
  handleNextButton: () => void;
};

const AllMoviesPage = ({
  movieList,
  currentPage,
  handlePreviousButton,
  handleNextButton,
}: MovieListPrpos) => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-4 grid grid-cols-5 gap-6 bg-gray-300">
        {movieList.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      <div className="bg-slate-100 flex justify-center items-center gap-2 p-2 rounded-lg">
        <button onClick={handlePreviousButton}>
          <GrFormPrevious />
        </button>
        <button>{currentPage + 1}</button>
        <button onClick={handleNextButton}>
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default AllMoviesPage;
