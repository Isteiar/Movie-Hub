import { Link, useLocation, useNavigate } from "react-router-dom";
import rtlogo from "../assets/rtlogo.png";
import { BiSearch } from "react-icons/bi";
import { removeToken } from "../services/token.services";
import { getLoggedInUserInfo } from "../services/auth.services";
import { useEffect, useState } from "react";
import { IUserInfo } from "../interfaces/User.interface";

type NavbarProps = {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({ search, setSearch }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const searchAllowedIn = ["/"];

  const fetchLoggedInUserInfo = async () => {
    const data = await getLoggedInUserInfo();
    setUserInfo(data);
  };

  useEffect(() => {
    fetchLoggedInUserInfo();

    if (searchAllowedIn.includes(location.pathname)) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, []);

  const logout = () => {
    removeToken();
    setUserInfo(undefined);
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 mx-auto text-white fixed top-0 left-0 right-0 z-50">
      <div className=" mx-auto px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-2xl">
              <Link to="/">
                <img
                  src={rtlogo}
                  alt="rotten-tomatoes_logo"
                  width={160}
                  height={50}
                />
              </Link>
            </span>
          </div>

          {showSearch && (
            <div className="relative w-2/4">
              <input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-white text-gray-700 pl-12 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-300"
                value={search}
                onChange={(e) => setSearch && setSearch(e.target.value)}
              />
              <BiSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-400"
                size={20}
              />
            </div>
          )}
          <div className="hidden md:flex items-center space-x-6">
            {userInfo && (
              <>
                <div className="hover:text-gray-300 font-semibold">
                  {userInfo.username}
                </div>
                <button
                  className="hover:text-gray-300 font-semibold"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )}

            {!userInfo && (
              <Link to="/login" className="hover:text-gray-300 font-semibold">
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
