import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-white py-10 mt-20">
      <h2 className="text-4xl text-lime-400 font-bold text-center mb-4">
        LearnHub
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        <Link
          to="/forms"
          className="text-lg hover:text-yellow-400 transition font-medium"
        >
          Form
        </Link>
      </div>

      <p className="text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} LearnHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
