import React, { useState } from "react";
import "./Navbar.css";
import telephoneIcon from "../../assets/telephone-icon.png";
import questionMark from "../../assets/question-mark.png";
import dropdownIcon from "../../assets/dropdown.png";
import searchIcon from "../../assets/search-icon.png";
import cartIcon from "../../assets/cart-icon.png";

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
          <img src={telephoneIcon} alt="telephone-icon" className="theme" />
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
            <img src={searchIcon} alt="search-icon" className="search_icon" />
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
            <button className="btn-search" onClick={performSearch}>Search</button>
            <button className="btn-login">Login</button>
          </div>

          <div className="ask-help">
            <div className="question-mark">
              <img
                src={questionMark}
                alt="question-mark"
                className="question_mark"
              />
            </div>
            <div className="help">
              <p>Help</p>
            </div>
            <div className="dropdown-icon">
              <img
                src={dropdownIcon}
                alt="dropdown-icon"
                className="dropdown_icon"
              />
            </div>
          </div>

          <div className="cart">
            <img src={cartIcon} alt="cart-icon" className="cart_icon" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
