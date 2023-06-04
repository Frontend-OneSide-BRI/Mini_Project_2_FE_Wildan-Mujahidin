import React from "react";
import Slider from "react-slick";
import { dataCarousel } from "../database/images.js";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {dataCarousel.map((data) => (
        <div className="h-fit overflow-x-hidden" key={data.id}>
          <img src={data.img} alt="" className="w-full h-full" />
        </div>
      ))}
    </Slider>
  );
}
