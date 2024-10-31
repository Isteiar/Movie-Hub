import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: <ProtectedRoute />, // Protected routes
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer position="bottom-right" />

    <RouterProvider router={router} />
  </StrictMode>
);
