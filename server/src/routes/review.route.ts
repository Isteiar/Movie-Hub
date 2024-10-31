import { Router } from "express";
import { createReview, getAllReviews } from "../controllers/review.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const reviewRouter = Router();

reviewRouter.post("/add-review", authMiddleware, createReview);
reviewRouter.get("/review", getAllReviews);

export default reviewRouter;
