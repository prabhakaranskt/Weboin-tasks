import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 
                 flex flex-col sm:flex-row items-center justify-between
                 py-3 px-5 border border-white rounded-full mx-auto mt-5 
                 w-[90%] sm:w-[80%] bg-black/60 backdrop-blur-md z-50 gap-2"
    >
      <Link
        to="/"
        className="text-2xl text-lime-400 font-bold text-center sm:text-left"
      >
        LearnHub
      </Link>

      <Link
        to="/forms"
        className="text-base sm:text-lg font-semibold text-white"
      >
        Admin
      </Link>
    </div>
  );
};

export default Navbar;
