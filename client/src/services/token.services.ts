import { IUserInfo } from "../interfaces/User.interface";

const accessTokenStorageKey = "access_token";
const userInfoStorageKey = "user_info";

export const setToken = (token: string) => {
  return localStorage.setItem(accessTokenStorageKey, token); //(key:value) pair
};

export const getToken = () => {
  return localStorage.getItem(accessTokenStorageKey); //key
};

export const removeToken = () => {
  return localStorage.removeItem(accessTokenStorageKey); //key
};

export const removeUserInfoFromLocalStorage = () => {
  localStorage.removeItem(userInfoStorageKey);
};
