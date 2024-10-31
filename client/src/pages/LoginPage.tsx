import { useState } from "react";
import { IUser } from "../interfaces/User.interface";
import { login } from "../services/auth.services";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../services/token.services";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const tokenData = await login(loginData);

      console.log(tokenData.access_token);

      setToken(tokenData.access_token); //set token in local storage

      navigate("/");
    } catch (error) {
      toast.error("Invalid email or password", { pauseOnHover: false });
    }
  };

  return (
    <div className=" max-w-screen-lg mx-auto h-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className=" p-8 bg-gray-200 space-y-2 rounded-md shadow-md"
      >
        <div className="text-center text-3xl font-semibold mb-4 text-black">
          Login
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="text-2xl">Email</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            className="px-3 py-2 text-2xl rounded-md bg-gray-100"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
            required
          />
        </div>
        <div className="flex flex-col gap-2 pb-4 ">
          <label className="text-2xl">Password</label>
          <input
            type="password"
            placeholder="password"
            className="px-3 py-2 text-2xl rounded-md bg-gray-100"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 px-3 py-2 text-2xl  text-gray-100 rounded-md w-full"
        >
          Submit
        </button>
      </form>
      <p className="text-md mt-2 font-light text-gray-500">
        Don&apos;t have an account yet?
        <Link
          to="/register"
          className=" font-medium text-primary-600 hover:underline  text-primary-600 text-blue-600 ml-1"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
