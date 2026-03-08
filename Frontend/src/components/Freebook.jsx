import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Slider = SlickSlider.default || SlickSlider;

export default function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
const getBook = async () => {
  try {
    const res = await axios.get("http://localhost:4001/book");

    const freeBooks = res.data.filter(
      (data) => data.category === "free"
    );

    setBook(freeBooks);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};;

    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 py-10">
      
      {/* Heading */}
      <div className="mb-6">
        <h1 className="font-semibold text-2xl pb-2">
          Free Offered Courses
        </h1>

        <p className="text-gray-500">
          Explore our collection of free courses available for all users.
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {book.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </Slider>

    </div>
  );
}

