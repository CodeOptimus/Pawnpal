import React from "react";
import Slider from "react-slick";
import "./Sponsors.css";
import { assets } from "../../assets/assets";



function Sponsors() {
  const settings = {
    infinite: true,
    slidesToShow: 9,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    dots: false,
  };
  return (
    <div className="slider-container-sponsors">
      <Slider {...settings}>
      {[...Array(9)].map((_, index) => (
        <div className="sponsor-logo">
          <img src={assets[`sponsor_${index}`]} alt={`sponsor ${index}`} />
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default Sponsors;
