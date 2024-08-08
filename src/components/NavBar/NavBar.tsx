import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full">
      <nav className=" bg-amber-100 py-5 flex">
        <ul className="flex gap-10 pl-12 items-center font-normal">
          <li>
            <Link className="text-5xl font-medium" to="/">
              BREW
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-700 duration-300" to="/Shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-700 duration-300" to="/About">
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-green-700 duration-300"
              to="/LocationHours"
            >
              Location & Hours
            </Link>
          </li>
        </ul>
        <ul className="ml-auto flex gap-10 pr-12 items-center font-normal">
          <li>
            <Link
              className="hover:text-gray-600 flex items-center gap-2"
              to="/Login"
            >
              <FaUserCircle className="w-7 h-7" />
              Log In
            </Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li className="bg-black text-white w-32 h-10 pt-2 text-center hover:bg-green-700 duration-200">
            <Link to="/OrderOnline">Order Online</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
