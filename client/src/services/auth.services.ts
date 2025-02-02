import axios from "axios";
import { baseURL } from "./movie.service";
import { IUser } from "../interfaces/User.interface";
import { getToken } from "./token.services";

export const register = async (data: IUser) => {
  const response = await axios.post(`${baseURL}/user/resgister`, data);
  return response;
};

export const login = async (data: IUser) => {
  const response = await axios.post(`${baseURL}/user/login`, data);
  return response.data;
};

export const getLoggedInUserInfo = async () => {
  const response = await axios.get(`${baseURL}/user/logged-in-user`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": `application/json`,
    },
  });
  // console.log(response.data);
  return response.data;
};
