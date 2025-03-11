import React from "react";
import { assets } from "../../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";


const heroImages = [assets.hero_2, assets.hero_3, assets.hero_4];

function Hero() {
  // Settings for slider effect
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
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
          {heroImages.map((image, index) => (
            <div className="banner" key={index}>
              <img src={image} alt={`Welcome to Pawnpal banner ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Hero;




// slider arrow customizations
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#FE6C2C" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#FE6C2C" }}
//       onClick={onClick}
//     />
//   );
// }