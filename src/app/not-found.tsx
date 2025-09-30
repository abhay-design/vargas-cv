import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-6xl font-bold text-amber-700">404</h1>
      <p className="mt-4 text-2xl text-gray-800">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">
        The page you looking for doesn exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default page;
