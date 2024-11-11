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

//get paginated movies
export const getPaginatedMovies = async (req: Request, res: Response) => {
  const { pageNumber, pageSize } = req.query;

  try {
    if (!pageNumber) {
      res.send({ message: "Page number is required" });
      return;
    }
    if (!pageSize) {
      res.send({ message: "Page size is required" });
      return;
    }
    const page = parseInt(pageNumber as string);
    const limit = parseInt(pageSize as string);

    if (Number.isNaN(page) || Number.isNaN(limit)) {
      res.send({ message: "Invalid page number or page size" });
      return;
    }

    const skip = page * limit;
    const paginatedMovies = await MovieModel.find()
      .skip(skip)
      .limit(limit)
      .populate("reviews");

    const totalMovies = await MovieModel.countDocuments();

    res.send({
      message: "Paginated movie is found",
      response: paginatedMovies,
      totalMovies,
    });
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ message: "Error fetching movies", error: err });
  }
};

// //get all movies
// export const getAllMovies = async (req: Request, res: Response) => {
//   try {
//     const allMovies = await MovieModel.find().populate("reviews");
//     res.send(allMovies);
//   } catch (err) {
//     res.status(500).send({ message: "Can't get movies", error: err });
//   }
// };

//get single movie by movieId
export const getSingleMovie = async (req: Request, res: Response) => {
  const id = req.params.id; //movieId from frontend
  try {
    const singleMovie = await MovieModel.findById(id).populate({
      path: "reviews",
      populate: {
        path: "user",
      },
    });
    res.send(singleMovie);
  } catch (err) {
    res.status(500).send({ message: "Can't get movie", error: err });
  }
};

//add all movies from dbjson

export const addAllMovies = async (req: Request, res: Response) => {
  try {
    const addMovies = await MovieModel.insertMany(req.body);
    res.send({
      message: "All movies are added successfully",
      response: addMovies,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Movies are not added " });
  }
};

//get all filtered movie
export const getFilteredMovies = async (req: Request, res: Response) => {
  const { title, pageNumber, pageSize, genre, release, rating } = req.body;
  try {
    if (pageNumber === undefined) {
      res.send({ message: "Page number is required" });
      return;
    }
    if (!pageSize) {
      res.send({ message: "Page size is required" });
      return;
    }
    const page = parseInt(pageNumber as string);
    const limit = parseInt(pageSize as string);

    if (Number.isNaN(page) || Number.isNaN(limit)) {
      res.send({ message: "Invalid page number or page size" });
      return;
    }

    const skip = pageNumber * pageSize;

    const query: any = {};
    if (title && typeof title === "string") {
      query.title = new RegExp(title, "i");
    }

    if (genre && typeof genre === "string") {
      query.genre = genre;
    }

    if (release && !isNaN(Number(release))) {
      query.releaseYear = Number(release);
    }

    if (rating && !isNaN(Number(rating))) {
      query.rating = { $gte: Number(rating) };
    }
    
    const totalMovies = await MovieModel.countDocuments(query);

    const movies = await MovieModel.find(query)
      .skip(skip)
      .limit(limit)
      .populate("reviews");

    res.send({
      message: "Movie is found",
      response: movies,
      totalMovies,
    });
  } catch (err) {
    res.status(500).send({ message: "Error searching movies", err });
  }
};
