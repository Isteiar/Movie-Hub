import { Router } from "express";
import {
  addAllMovies,
  createMovie,
  getAllMovies,
  getPaginatedMovies,
  getSingleMovie,
} from "../controllers/movie.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const movieRouter = Router();

movieRouter.post("/add-movie", authMiddleware, createMovie);
movieRouter.post("/add-all-movies", addAllMovies);

movieRouter.get("/", getAllMovies);
movieRouter.get("/paginatedMovies", getPaginatedMovies);
movieRouter.get("/:id", getSingleMovie);

export default movieRouter;
