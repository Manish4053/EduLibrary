import React from "react";

function Cards({ item }) {
  return (
    <div
      className="bg-white w-full max-w-sm rounded-xl 
                 border border-pink-300 
                 shadow-md 
                 hover:shadow-2xl hover:-translate-y-2
                 transition-all duration-300 
                 overflow-hidden p-4"
    >
      {/* Image */}
      <div className="bg-gray-50 rounded-lg flex items-center justify-center h-56">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-52 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2  ">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {item.title}
          </h2>
          <span className="px-2 py-1 text-xs bg-pink-500 text-white rounded-full">
            {item.name}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {item.catageory}
        </p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-gray-800">
            ${item.price}
          </span>

          <button className="px-4 py-1.5 text-sm font-medium 
                             bg-pink-500 text-white rounded-full
                             hover:bg-pink-600 
                             transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;