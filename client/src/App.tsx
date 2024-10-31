import { useEffect, useState } from "react";
import "./App.css";
import { IMovie } from "./interfaces/Movie.interface";
import { getPaginatedMovies } from "./services/movie.service";
import AllMovies from "./pages/AllMoviesPage";

function App() {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [maxPage, setMaxPage] = useState(10);

  useEffect(() => {
    fetchMovies();
  }, [pageNumber]);

  // const fetchMovies = async () => {
  //   const data = await getAllMovies();
  //   setMovieList(data || []); //here we use [].because if the data is undefine
  // };

  const fetchMovies = async () => {
    const data = await getPaginatedMovies(pageNumber, 10);
    // console.log("data: ", data);
    setMovieList(data?.response || []); //here we use [].because if the data is undefine
    setMaxPage(Math.floor((data?.totalMovies || 0) / 10));
  };

  const handlePreviousButton = () => {
    setPageNumber((curr) => {
      return curr > 0 ? curr - 1 : curr;
    });
  };
  const handleNextButton = () => {
    setPageNumber((curr) => {
      return curr <= maxPage ? curr + 1 : curr;
    });
  };

  return (
    <div className="bg-gray-400 h-screen w-full overflow-y-auto ">
      <AllMovies
        movieList={movieList}
        currentPage ={pageNumber}
        handlePreviousButton={handlePreviousButton}
        handleNextButton={handleNextButton}
      />
    </div>
  );
}

export default App;
