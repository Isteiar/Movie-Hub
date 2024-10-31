import { useState } from "react";
import { IUser } from "../interfaces/User.interface";
import { register } from "../services/auth.services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register(registerData);
      navigate("/login");
    } catch (err) {
      toast.error("Something went wrong", { pauseOnHover: false });
    }
  };

  return (
    <div className=" max-w-screen-lg mx-auto h-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className=" p-8 bg-gray-200 space-y-2 rounded-md shadow-md"
      >
        <div className="text-center text-3xl font-semibold mb-4 text-black">
          Register
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="text-2xl">Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-3 py-2 text-2xl  rounded-md bg-gray-100"
            required
            value={registerData.username}
            onChange={(e) =>
              setRegisterData((prevData) => {
                return { ...prevData, username: e.target.value };
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="text-2xl">Email</label>
          <input
            type="email"
            placeholder="name@gmail.com"
            className="px-3 py-2 text-2xl rounded-md bg-gray-100"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData((prevData) => {
                return { ...prevData, email: e.target.value };
              })
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
            value={registerData.password}
            onChange={(e) =>
              setRegisterData((prevData) => {
                return { ...prevData, password: e.target.value };
              })
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
      <div className="text-md pt-2 font-light text-gray-500">
        Already have an account?
        <Link
          to="/login"
          className="font-medium text-primary-600 hover:underline text-blue-600 ml-1"
        >
          Login here
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
