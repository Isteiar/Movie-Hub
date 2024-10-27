import { Request, Response } from "express";
import { MovieModel } from "../models/Movie.model";

//create movie
export const createMovie = async (req: Request, res: Response) => {
  const { title, thumbnail, description, genres } = req.body;
  try {
    const newMovie = await MovieModel.create({
      title,
      thumbnail,
      description,
      genres,
    });

    res
      .status(201)
      .send({ message: "Movie is created successfully", response: newMovie });
  } catch (err) {
    res.status(500).send({
      message: "Movie is not created",
      error: err,
    });
  }
};

//get all movies
export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await MovieModel.find().populate("review");
    res.send(allMovies);
  } catch (err) {
    res.status(500).send({ message: "Can't get movies", error: err });
  }
};
