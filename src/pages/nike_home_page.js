import React from "react";
import logo from "../assets/brand_logo.png";
import shoe from "../assets/shoe_image.png";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";

function NikeHomePage() {
  return (
    <>
      <div className="bg-yellow-300">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center">
            <div>
              <img src={logo} alt="" className="p-3" />
            </div>
            <div className="flex gap-4">
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
      <div className="container mx-auto">
        <main className="mb-30 md:p-20 p-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 md:order-1 order-2">
              <h1 className="text-7xl font-black mb-8">
                YOUR FEET DESRVES THE BEST
              </h1>
              <p className=" mb-8 leading-6 font-semibold text-base text-[#5A5959]">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-red-700 hover:bg-red-800  text-white btn">
                  Show Now
                </button>
                <button className="btn text-[#5A5959] hover:bg-slate-50 border-black border py-6 px-16">
                  Category
                </button>
              </div>
              <div>
                <p className="text-[#5A5959] font-normal text-xs mb-8">
                  Also Available On
                </p>
                <div className="flex gap-4">
                  <img src={flipkart} alt="" />
                  <img src={amazon} alt="" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:order-2 order-1">
              <img src={shoe} alt="" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default NikeHomePage;
