import React from "react";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

// slider arrow customizations
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FE6C2C" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#FE6C2C" }}
      onClick={onClick}
    />
  );
}

function Hero() {
  // settings for slider effect
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="item-list">
        <ul>
          <li>
            <a href="#">Phone & Tablets</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Computer</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Bags</a>
          </li>
          <li>
            <a href="#">Motor</a>
          </li>
          <li>
            <a href="#">Bicycles</a>
          </li>
          <li>
            <a href="#">Furniture</a>
          </li>
          <li>
            <a href="#">Generator</a>
          </li>
          <li>
            <a href="#">Polytank</a>
          </li>
        </ul>
      </div>

      {/* Slider implementation for hero banners */}

      <div className="slider-container">
        <Slider {...settings}>
          <div className="banner">
            <img src="../../../HeroImg.jpg" alt="Welcome to Pawnpal banner" />
          </div>
          <div className="banner">
            <img src="../../../Hero-2.png" alt="Black Friday Sales Banner" />
          </div>
          <div className="banner">
            <img src="../../../Hero-3.png" alt="Week's Special Banner" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hero;
