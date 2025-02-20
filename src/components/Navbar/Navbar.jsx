import "./Navbar.css";
import telephoneIcon from "../../assets/telephone-icon.png";
import questionMark from "../../assets/question-mark.png";
import dropdownIcon from "../../assets/dropdown.png";
import searchIcon from "../../assets/search-icon.png";
import cartIcon from "../../assets/cart-icon.png";

function Navbar() {
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
          <div className="name">
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
            />
            <button className="btn-search">Search</button>
            <button className="btn-login">Login</button>
          </div>

          <div className="help">
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
