import React from "react";
import { assets } from "../../assets/assets";
import "./NewArrival.css";

function NewArrival() {
  return (
    <>
      <div className="new-arrival">
        <h2 className="new-arrival-heading">New Arrivals</h2>
        <p>
          Grab our latest arrivals before they sell out!
          <br />
          Don't miss out on the freshest trends and hottest deals!
        </p>

        <div className="new-arrival-container">
          <div className="first-set">
            <div className="new-arrival-item">
              <img src={assets.yellow_arrival} alt="yellow nike" className="yellow_arrival"/>
            </div>
            <div className="new-arrival-item">
              <img src={assets.blue_arrival} alt="blue nike" className="blue_arrival"/>
            </div>
          </div>

          <div className="new-arrival-item">
            <img src={assets.red_arrival} alt="red nike" className="red_arrival"/>
          </div>

          <div className="second-set">
            <div className="new-arrival-item">
              <img src={assets.white_arrival} alt="white nike" className="white_arrival"/>
            </div>
            <div className="new-arrival-item">
              <img src={assets.air_arrival} alt="laptop" className="air_arrival"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
