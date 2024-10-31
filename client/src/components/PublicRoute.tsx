import { FC } from "react";
import { getToken } from "../services/token.services";
import { Navigate, Outlet } from "react-router-dom";

interface PublicRouteProps {
  redirectPath?: string;
}

const PublicRoute: FC<PublicRouteProps> = ({ redirectPath = "/" }) => {
  const isLoggedIn = !!getToken();
//   console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectPath} /> : <Outlet />;
};

export default PublicRoute;
