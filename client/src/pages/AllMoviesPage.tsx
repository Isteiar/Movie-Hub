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
      <div className="flex flex-wrap pt-20 gap-4 w-full max-w-7xl justify-center mx-auto">
        {movieList.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      <div className="bg-slate-100 max-w-screen-sm mx-auto m-8 flex justify-center items-center gap-2 p-2 rounded-lg">
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
