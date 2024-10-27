import { Router } from "express";
import { createMovie, getAllMovies } from "../controllers/movie.controller";

const movieRouter = Router();

movieRouter.post("/add-movie", createMovie);
movieRouter.get("/movies", getAllMovies);

export default movieRouter;
