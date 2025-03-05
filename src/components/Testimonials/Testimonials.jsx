import React, { Component } from "react";
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
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1};`
      );
    },
  };
  return (
    <>
      <div className="heading">
        <h1>What People Say About Us</h1>
        <p>
          Some good news our beloved customers say about us and our products
        </p>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="review">
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
              <img src={assets.testimony_0} alt="smiling guy" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_1} alt="guy in blue" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_2} alt="second lady" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_3} alt="actor guy" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_4} alt="serious guy" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_5} alt="rasta guy" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_6} alt="first lady" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_7} alt="smiling guy" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
          <div className="review">
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
              <img src={assets.testimony_0} alt="smiling guy" />
              <p>Christopher Doe</p>
              <span>Chairman</span>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Testimonials;
