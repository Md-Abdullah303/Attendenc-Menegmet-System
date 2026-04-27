import React from "react";
import errorImg from "../../assets/App-Error.png";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400 px-4 text-center">
      
      {/* Image */}
      <img
        src={errorImg}
        alt="404 error"
        className="w-[220px] sm:w-[300px] md:w-[400px] mb-6"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
        Oops! Page Not Found 😢
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 max-w-md">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-white text-purple-600 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-purple-100 transition duration-300"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;