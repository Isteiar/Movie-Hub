import { Router } from "express";
import { createReview } from "../controllers/review.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const reviewRouter = Router();

reviewRouter.post("/add-review", authMiddleware, createReview);
// reviewRouter.get("/", getAllReviews);

export default reviewRouter;
