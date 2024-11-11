import { Link } from "react-router-dom";
import errorLogo from "../assets/404error.svg";
function NotFoundPage() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img src={errorLogo} width={500} height={500} alt="404 Error" />
      <Link to="/">
        <button className="w-full bg-fuchsia-400 bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 text-zinc-900  rounded-lg font-medium px-5 py-2 text-center mt-8">
          Return Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
