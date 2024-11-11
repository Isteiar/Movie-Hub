import { Router } from "express";
import {
  addAllMovies,
  createMovie,
  getFilteredMovies,
  getPaginatedMovies,
  getSingleMovie,
} from "../controllers/movie.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const movieRouter = Router();

movieRouter.post("/add-movie", authMiddleware, createMovie);
movieRouter.post("/add-all-movies", addAllMovies);

// movieRouter.get("/", getAllMovies);
movieRouter.get("/paginatedMovies", getPaginatedMovies);
movieRouter.get("/movie-details/:id", getSingleMovie);
movieRouter.post("/filteredMovies", getFilteredMovies);

export default movieRouter;
