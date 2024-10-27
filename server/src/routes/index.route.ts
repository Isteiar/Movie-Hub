import { Router } from "express";
import userRouter from "./user.route";
import genreRouter from "./genre.route";
import movieRouter from "./movie.route";
import reviewRouter from "./review.route";

const router = Router();

router.use("/user", userRouter);

router.use("/movies", movieRouter);
router.use("/genres", genreRouter);
router.use("/reviews", reviewRouter);

export default router;
