import { useEffect, useState } from "react";
import "./App.css";
import { IMovie } from "./interfaces/Movie.interface";
import { getAllMovies } from "./services/movie.service";
import AllMovies from "./pages/AllMoviesPage";

function App() {
  const [movieList, setMovieList] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getAllMovies();
    setMovieList(data || []); //here we use [].because if the data is undefine
  };

  return (
    <div className="bg-gray-400 h-screen w-full overflow-y-auto ">
      <AllMovies movieList={movieList} />
    </div>
  );
}

export default App;
