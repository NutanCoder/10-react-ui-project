import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="bg-[#161d25]">
      <div className="container mx-auto text-center h-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-9xl text-white">404</h1>
          <Link to="/" className=" text-blue-400 underline">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
