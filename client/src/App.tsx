import { useEffect, useState } from "react";
import "./App.css";
import { IMovie } from "./interfaces/Movie.interface";
import { searchMovies } from "./services/movie.service";
import AllMovies from "./pages/AllMoviesPage";
import Navbar from "./components/Navbar";

function App() {
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [search, setSearch] = useState("");

  // const fetchMovies = async () => {
  //   const data = await getAllMovies();
  //   setMovieList(data || []); //here we use [].because if the data is undefine
  // };

  useEffect(() => {
    fetchSearchedMovies();
  }, [search,pageNumber]);

  const fetchSearchedMovies = async () => {
    const pageSize = 12;
    const data = await searchMovies(search, pageNumber, pageSize);
    // console.log("data: ", data);
    setMovieList(data?.response || []); //here we use [].because if the data is undefine
    setMaxPage(Math.floor((data?.totalMovies || 0) / pageSize));
  };

  // useEffect(() => {
  //   fetchMovies();
  // }, [pageNumber]);

  // const fetchMovies = async () => {
  //   const pageSize = 12;
  //   const data = await getPaginatedMovies(pageNumber, pageSize);
  //   // console.log("data: ", data);
  //   setMovieList(data?.response || []); //here we use [].because if the data is undefine
  //   setMaxPage(Math.floor((data?.totalMovies || 0) / pageSize));
  // };

  const handlePreviousButton = () => {
    setPageNumber((curr) => {
      return curr > 0 ? curr - 1 : curr;
    });
  };
  const handleNextButton = () => {
    setPageNumber((curr) => {
      return curr < maxPage ? curr + 1 : curr;
    });
  };

  return (
    <>
      <Navbar setSearch={setSearch} search={search} />
      <div className="bg-gray-400 h-screen w-full overflow-y-auto ">
        <AllMovies
          movieList={movieList}
          currentPage={pageNumber}
          handlePreviousButton={handlePreviousButton}
          handleNextButton={handleNextButton}
        />
      </div>
    </>
  );
}

export default App;
