import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import React from "react";
import ReviewForm from "../ReviewForm";

const ScrollToBottomButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="text-black hover:text-green-700 duration-300"
    >
      Location & Hours
    </button>
  );
};

export const NavBar = () => {
  return (
    <div className="fixed z-50 pt-12 w-full">
      <nav className="bg-amber-100 py-5 flex">
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
            <ScrollToBottomButton />
          </li>
          <li>
            <Link className="hover:text-green-700 duration-300" to="/Review">
              Write us a Review!
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
            <Link to="/Shop">Order Online</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
