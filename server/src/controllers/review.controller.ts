import { Request, Response } from "express";
import { ReviewModel } from "../models/Review.model";
import { IAuthRequest } from "../interfaces/AuthRequest.interface";
import { MovieModel } from "../models/Movie.model";
import { Types } from "mongoose";
import { IReview } from "../interfaces/Review.interface";

//create review
export const createReview = async (req: IAuthRequest, res: Response) => {
  const { rating, review, movieId } = req.body;
  if (!req.user) {
    res.sendStatus(403);
    return;
  }
  const userId = req.user._id;

  try {
    const findMovie = await MovieModel.findById(movieId);
    if (!findMovie) {
      res.status(500).send({ message: "Invalid movie id" });
      return;
    }

    const newReview = await ReviewModel.create({
      rating,
      review,
      movie: movieId,
      user: userId,
    });

    const allReviewsForMovie = await ReviewModel.find({movie: movieId});

    const avg = allReviewsForMovie.reduce((acc, curr) => acc + curr.rating, 0) / allReviewsForMovie.length;

    findMovie.averageRating = avg;
    findMovie.reviews.push(newReview._id as Types.ObjectId);
  
    await findMovie.save();

    res.status(201).send({ message: "Review is created", response: newReview });
  } catch (err) {
    res.status(500).send({ message: "Review is not created", error: err });
  }
};

// //get all reviews
// export const getAllReviews = async (req: Request, res: Response) => {
//   try {
//     const allReviews = await ReviewModel.find();
//     res.send(allReviews);
//   } catch (err) {
//     res.status(500).send({ message: "Review is not found", error: err });
//   }
// };
