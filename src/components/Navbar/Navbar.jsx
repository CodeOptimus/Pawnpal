import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
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
          <div className="name">
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
            />
            <div className="buttons">
              <button className="btn-search">Search</button>
              <button className="btn-login">Login</button>
            </div>
          </div>

          <div className="help">
            <div className="help-container">
              <div className="help-area">
              <img
                src={assets.questionMark}
                alt="question-mark"
                className="question_mark"
              />
              <p>Help</p>
              <img
                src={assets.dropdownIconBlack}
                alt="dropdown icon black"
                className="dropdown_icon"
              />
              </div>
            <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="nav-cart">
                <MdShoppingCart />
                <p>Cart</p>
              </div>
            </Link>
            </div>
          </div>

          
        </div>
      </div>
    </header>
  );
}

export default Navbar;
