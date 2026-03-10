import React from "react";
import banner from "../assets/Poster.jpg";


function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto flex flex-col md:flex-row ">
        <div className=" order-2 md:order-1 w-full md:w-1/2 p-4 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, Welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">
                Where Stories Begin and Knowledge Never Ends.
              </h1>
              <p className="text-xl">
                Discover books that educate, inspire, and entertain. Start your
                reading journey today and open the door to endless
                possibilities.
              </p>
            </div>
            <label
              className="flex items-center gap-3 px-4 py-2 
                  border border-gray-300 rounded-lg 
                 bg-white/70 backdrop-blur-md shadow-sm 
                  focus-within:ring-2 focus-within:ring-purple-500 
                  focus-within:border-purple-500
                  transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Click me!</button>
        </div>
        <div className=" order-1 w-full md:w-1/2 p-4 ">
          <img
  src={banner}
  alt="Banner"
  className="md:w-[550px] md:h-[550px] md:ml-12
             rounded-full
             object-cover
             shadow-2xl
             border-4 border-pink-200
             hover:scale-105
             transition duration-300"
/>
        </div>
      </div>
    </>
  );
}

export default Banner;
