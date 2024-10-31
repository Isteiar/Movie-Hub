import { Router } from "express";
import { createGenre, getAllGenres } from "../controllers/genre.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const genreRouter = Router();

genreRouter.post("/add-genre",authMiddleware, createGenre);
genreRouter.get("/genres", getAllGenres);

export default genreRouter;
