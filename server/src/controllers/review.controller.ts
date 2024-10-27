import { Request, Response } from "express";
import { ReviewModel } from "../models/Review.model";

//create review
export const createReview = async (req: Request, res: Response) => {
  const { rating, comment, movieId } = req.body;

  try {
    const newReview = await ReviewModel.create({
      rating,
      review: comment,
      movieId,
    });

    res.status(201).send({ message: "Review is created", response: newReview });
  } catch (err) {
    res.status(500).send({ message: "Review is not created", error: err });
  }
};

//get all reviews
export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const allReviews = await ReviewModel.find();
  } catch (err) {
    res.status(500).send({ message: "Review is not found", error: err });
  }
};
