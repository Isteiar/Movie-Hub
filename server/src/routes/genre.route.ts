import { Router } from "express";
import { createGenre, getAllGenres } from "../controllers/genre.controller";

const genreRouter = Router();

genreRouter.post("/add-genre", createGenre);
genreRouter.get("/genres", getAllGenres);

export default genreRouter;
