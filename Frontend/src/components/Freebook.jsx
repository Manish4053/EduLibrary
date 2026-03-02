import React from "react";
import list from "../data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import Cards from "./Cards";

export default function Freebook() {
  const filterData = list.filter((data) => data.catageory === "free");
  var settings = {
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
          initialSlide: 2,
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
  //   console.log(filterData);
  //   console.log(Slider);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 ">
        <div>
          <h1 className="font-semibold text-xl pd-2">Free offered courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
            nisi totam? Modi facilis animi odit. Excepturi, cum. Repellat eum
            quae quisquam, facilis assumenda quo et placeat id nam eligendi
            delectus.
          </p>
        </div>
      
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id}/>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
}
