import { FC } from "react";
import { getToken } from "../services/token.services";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: FC = () => {
  const isLoggedIn = !!getToken();
  console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={"/"} /> : <Outlet />;
};

export default ProtectedRoute;
