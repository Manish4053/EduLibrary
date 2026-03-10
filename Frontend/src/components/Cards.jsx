import React from "react";

function Cards({ item }) {
  const isFree = item.category === "free";

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
          src={item.image || "/placeholder.png"}
          alt={item.title || "Course Image"}
          className="max-h-52 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold line-clamp-1">{item.title}</h2>

          <span className="px-2 py-1 text-xs bg-pink-500 text-white rounded-full">
            {item.name}
          </span>
        </div>

        {/* <p className="text-sm text-gray-500 font-bold text-left capitalize">
          {item.category}
        </p> */}

        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-gray-800">
            {isFree ? "Free" : `$${item.price}`}
          </span>

          {item.driveLink && (
            <a
              href={item.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-1.5 text-sm font-medium text-white rounded-full transition duration-200 
              ${
                isFree
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              {isFree ? "View PDF" : "Buy & View"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
