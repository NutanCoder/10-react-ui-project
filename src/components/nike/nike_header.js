import React from "react";
import logo from "../../assets/brand_logo.png";

function NikeHeader() {
  return (
    <div className="bg-yellow-300">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center px-4 md:px-0">
          <div>
            <img src={logo} alt="" className="p-3" />
          </div>
          <div className="md:flex gap-4 hidden">
            <a href="#" className="text-base font-semibold hover:underline">
              Menu
            </a>
            <a href="#" className="text-base font-semibold hover:underline">
              Location
            </a>
            <a href="#" className="text-base font-semibold hover:underline">
              About
            </a>
            <a href="#" className="text-base font-semibold hover:underline">
              Contact
            </a>
          </div>
          <div>
            <button className="bg-red-700 hover:bg-red-800 text-white btn">
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NikeHeader;
