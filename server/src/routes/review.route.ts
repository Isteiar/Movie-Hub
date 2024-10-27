import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/review.controller";

const reviewRouter = Router();

reviewRouter.post("/add-review", createReview);
reviewRouter.get("/review", getAllReviews);

export default reviewRouter;
