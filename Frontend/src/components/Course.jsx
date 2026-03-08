import React, { useState, useEffect } from "react";
import Card from "./Cards";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Course() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setBook(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getBook();
  }, []);

  return (
    <div className="pt-24 pb-16 text-center">
      {/* Top Section */}
      <div className="max-w-screen-2xl container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-semibold">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here!</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Explore a wide collection of free and premium educational books
          designed to help students learn, grow, and achieve their academic
          goals
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 bg-pink-500 text-white px-6 py-2 rounded-md 
                     hover:bg-pink-700 transition duration-300"
        >
          Back
        </button>
      </div>

      {/* Cards Section */}
      <div
        className="mt-14 max-w-screen-2xl container mx-auto px-4 
                   grid gap-8 grid-cols-1 sm:grid-cols-2 
                   md:grid-cols-3 lg:grid-cols-4"
      >
        {book.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
