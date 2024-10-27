import { Request, Response } from "express";
import { GenreModel } from "../models/Genre.model";

//create genre
export const createGenre = async (req: Request, res: Response) => {
  const { genre } = req.body;

  try {
    const newGenre = await GenreModel.create({
      genre,
    });

    res.status(201).send({ message: "Genre is created", response: newGenre });
  } catch (err) {
    res.status(500).send({ message: "Genre is not created", error: err });
  }
};

//get all genres
export const getAllGenres = async (req: Request, res: Response) => {
  try {
    const allGenres = await GenreModel.find();
    res.send({ message: "Genre is founded", response: allGenres })
  } catch (err) {
    res.status(500).send({ message: "Genre is not found", error: err });
  }
};
