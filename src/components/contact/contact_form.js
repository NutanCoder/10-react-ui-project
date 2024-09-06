import React from "react";
import { MdMessage } from "react-icons/md";
import { IoMdCall, IoIosChatbubbles } from "react-icons/io";

function ContactForm() {
  return (
    <>
      <div className="flex gap-4 mb-8">
        <button className="shadow bg-black text-white py-2 px-2 rounded w-1/2 flex justify-center items-center">
          <IoIosChatbubbles className="mr-2" />
          VIA SUPPORT CHAT
        </button>
        <button className="shadow bg-black text-white py-2 px-12 rounded w-1/2 flex justify-center items-center">
          <IoMdCall className="mr-2" />
          VIA CALL
        </button>
      </div>
      <div className="mb-8">
        <button className="border shadow border-black py-2 w-full rounded hover:bg-gray-600 hover:text-white flex justify-center items-center">
          <MdMessage className="mr-2" />
          VIA EMAIL FORM
        </button>
      </div>
      <div className="container mx-auto border border-gray-50">
        <form action="#">
          <div className="mb-2">
            <label htmlFor="name" className="mr-4">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="mr-4">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="subject" className="mr-4">
              Subject:
            </label>
            <textarea
              rows="6"
              className="input"
              placeholder="Enter Subject"
            ></textarea>
          </div>
          <div className="flex md:justify-end flex-col md:flex-row">
            <button className="bg-black rounded py-2 px-16 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
