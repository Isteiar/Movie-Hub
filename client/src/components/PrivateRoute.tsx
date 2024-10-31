import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/token.services";
import { FC } from "react";

export const PrivateRoute: FC = () => {
  const isLoggedIn = !!getToken();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
