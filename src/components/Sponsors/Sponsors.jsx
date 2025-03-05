import React from "react";
import Slider from "react-slick";
import "./Sponsors.css";
import { assets } from "../../assets/assets";

function Sponsors() {
  const settings = {
    infinite: true,
    slidesToScroll: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={assets.sponsor_0} alt="maxhub-logo" />
        </div>
        <div>
          <img src={assets.sponsor_1} alt="itel-logo" />
        </div>
        <div>
          <img src={assets.sponsor_2} alt="akai-logo" />
        </div>
        <div>
          <img src={assets.sponsor_3} alt="datalogic-logo" />
        </div>
        <div>
          <img src={assets.sponsor_4} alt="sony-logo 1" />
        </div>
        <div>
          <img src={assets.sponsor_5} alt="htc-logo" />
        </div>
        <div>
          <img src={assets.sponsor_6} alt="siemens-logo 1" />
        </div>
        <div>
          <img src={assets.sponsor_7} alt="sandisk-logo_brandlogos.net_kbn6y 1" />
        </div>
        <div>
          <img src={assets.sponsor_8} alt="logitech_g-logo_brandlogos.net_tzeki 1" />
        </div>
        <div>
          <img src={assets.sponsor_9} alt="osram-vector-logo" />
        </div>
      </Slider>
    </div>
  );
}

export default Sponsors;
