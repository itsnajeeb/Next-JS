import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-6">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-600 mt-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-gray-500 mt-2">
          It might have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/" >
            <button className="px-6 py-2 rounded-2xl bg-blue-600 text-white text-lg font-medium shadow-md hover:bg-blue-700 transition">Home</button>
            Home
          </Link>
          <button

            className="px-6 py-2 rounded-2xl bg-gray-300 text-gray-800 text-lg font-medium shadow-md hover:bg-gray-400 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
