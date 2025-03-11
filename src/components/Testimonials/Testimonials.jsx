import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import { assets } from "../../assets/assets";

function Testimonials() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="heading">
        <h1>What People Say About Us</h1>
        <p>
          Some good news our beloved customers say about us and our products
        </p>
      </div>

      <div className="slider-container-review">
        <Slider {...settings}>
          {[...Array(9)].map((_, index) => (
            <div className="review" key={index}>
              <div className="info">
                <h3>Customer Review</h3>
                <p>
                  I recently purchased a product and I couldn't be happier with my
                  experience! The quality is outstanding, and it exceeded all my
                  expectations. The customer service team was also incredibly
                  helpful and responsive. I highly recommend this site to anyone
                  looking for a reliable and top-notch product. Five stars!
                </p>
              </div>
              <div className="profile">
                <img src={assets[`testimony_${index}`]} alt={`testimony ${index}`} />
                <p>Christopher Doe</p>
                <span>Chairman</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Testimonials;