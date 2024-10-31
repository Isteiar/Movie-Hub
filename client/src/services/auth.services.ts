import axios from "axios";
import { baseURL } from "./movie.service";
import { IUser } from "../interfaces/User.interface";

export const register = async (data: IUser) => {
  const response = await axios.post(`${baseURL}/user/resgister`, data);
  return response;
};

export const login = async (data: IUser) => {
  const response = await axios.post(`${baseURL}/user/login`, data);
  return response.data;
};
