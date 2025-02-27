import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
    const [query, setQuery] = useState ("");

    const handleInputChange =(event) => {
        setQuery(event.target.value);
    };

    const performSearch = () => {
        if (query.trim() !== "") {
            alert(`Searching for: "${query}"`);
        } else {
            alert("Please enter a search term.")
        }
    }

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-area">
          <p className="logo theme">LOGO</p>
          <span>Sell on PawnPal</span>
        </div>
        <div className="cto">
          <img
            src={assets.telephoneIcon}
            alt="telephone-icon"
            className="theme"
          />
          <span>Call to Order</span>
        </div>
        <div className="tease">
          <p>Hot deals just for you | We got you covered | Falaa deals</p>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="logo-name">
            <h2>
              PAWN <span className="make-orange">PAL</span>
            </h2>
          </div>

          <div className="search-box">
            <img
              src={assets.searchIcon}
              alt="search-icon"
              className="search_icon"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="search_box"
              value={query}
              onChange={handleInputChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                    performSearch()
                }
              }}
            />
<<<<<<< HEAD
            <div className="buttons">
              <button className="btn-search">Search</button>
              <button className="btn-login">Login</button>
            </div>
          </div>

          <div className="help">
            <div className="help-container">
=======
            <button className="btn-search" onClick={performSearch}>Search</button>
            <button className="btn-login">Login</button>
          </div>

          <div className="ask-help">
>>>>>>> f372434c879aded49b4db12c0a6494c45a047bc0
            <div className="question-mark">
              <img
                src={assets.questionMark}
                alt="question-mark"
                className="question_mark"
              />
            </div>
            <div className="help">
              <p>Help</p>
            </div>
            <div className="dropdown-icon">
              <img
                src={assets.dropdownIconBlack}
                alt="dropdown-icon"
                className="dropdown_icon"
              />
            </div>

            <div className="cart">
            <img src={assets.cart_icon} alt="cart-icon" className="cart_icon" />
            <span>Cart</span>
          </div>
            </div>
          </div>

          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
