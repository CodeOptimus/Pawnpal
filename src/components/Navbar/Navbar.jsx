import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import PropTypes from "prop-types";
import { useUser } from "../../context/UserContext";
import { useCart } from "../../contexts/CartContext";
import { useEffect, useState } from "react";

function Navbar({ setShowAuthModal, isAuthModalOpen }) {
  const { user, logout, isSessionExpired } = useUser();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isSessionExpired) {
      setShowAuthModal(true); // Show login modal when session expires
    }
  }, [isSessionExpired, setShowAuthModal]);

  const handleSearch = () => {
    const q = searchTerm.trim();
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-area">
          <div className="logo-container">
            <img src={assets.Pawnpal} alt="Pawnpal-logo" className="logo-img" />
          </div>
          <Link to="/seller-signup" className="sell-link">
            <span>Sell on PawnPal</span>
          </Link>
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={assets.Pawnpal}
                alt="Pawnpal-logo"
                className="main-logo-img"
              />
            </Link>
          </div>

          <div className="search-box">
            <div className="search-field">
              <img
                src={assets.searchIcon}
                alt="search-icon"
                className="search_icon"
              />
              <input
                type="text"
                placeholder="Search products..."
                className="search_box"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
              <button className="btn-search btn-search--embedded">Search</button>
            </div>

            <button className="btn-search btn-search--desktop" onClick={handleSearch}>
              Search
            </button>

            <div className="buttons">
              {user ? (
                <Link to="/dashboard" className="user-profile">
                  <div className="user-info">
                    <img
                      src={user.profilePic}
                      alt="Profile"
                      className="profile-pic"
                    />
                    <span>
                      Hi,{" "}
                      {user.fullName ||
                        user.contact?.split("@")[0] ||
                        user.contact}
                    </span>
                  </div>
                </Link>
              ) : (
                <Link to="/login" className="login-link">
                  <button className="btn-login">Login</button>
                </Link>
              )}
            </div>
          </div>

          <div className="header-actions">
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

            <Link to="/cart" className="cart-link">
              <div className="nav-cart" aria-label="Cart">
                <MdShoppingCart />
                <p>Cart</p>
                {cartItems.length > 0 && (
                  <span className="cart-indicator">{cartItems.length}</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
  isAuthModalOpen: PropTypes.bool.isRequired,
};

export default Navbar;
