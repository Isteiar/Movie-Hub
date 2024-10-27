import { Request, Response } from "express";
import { UserModel } from "../models/User.model";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    //check if email is already exists or not!
    const userAlreadyExist = await UserModel.findOne({ email });
    if (userAlreadyExist) {
      res.status(400).send({
        message: "User with this email already exists",
      });
    }

    //hashing password
    const hashPassword = await hash(password, 10);

    //creating a new user
    const newUser = await UserModel.create({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).send({ message: "New user is created", response: newUser });
  } catch (err) {
    res.status(400).json({ message: "Could not create user", error: err });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    //find the user is exist or not!
    const user = await UserModel.findOne({ email });
    if (!user) {
      //if user is not found
      res.status(401).send({ message: "Invalid email or password" });
      return;
    }

    const validPassword = compare(password, user.password);

    if (!validPassword) {
      res.status(401).send({ message: "Invalid email or password" });
    }

    //generate token
    const accessToken = sign({ id: user.id }, process.env.SECRET as string);

    res
      .status(200)
      .send({ message: "User is logged-in", access_token: accessToken });
  } catch (err) {
    res.status(500).send({ message: "User can't login" });
  }
};

//get all users

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await UserModel.find();
    res.send({ message: "Find all users", response: allUsers });
  } catch (err) {
    res.status(500).send({ message: "User is not found", error: err });
  }
};
