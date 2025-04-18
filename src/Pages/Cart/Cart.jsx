import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import ItemCard from "../../components/ItemCard/ItemCard";
import "./Cart.css";
import PropTypes from "prop-types";
import { useCart } from "../../contexts/CartContext";

function Cart({ setShowAuthModal, isAuthModalOpen }) {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleSingleCheckout = (item) => {
    // Store single item for checkout
    localStorage.setItem('checkoutItems', JSON.stringify([item]));
    navigate('/checkout');
  };

  const handleCheckoutAll = () => {
    // Store all items for checkout
    localStorage.setItem('checkoutItems', JSON.stringify(cartItems));
    navigate('/checkout');
  };

  return (
    <>
      <Navbar setShowAuthModal={setShowAuthModal} isAuthModalOpen={isAuthModalOpen} />
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
      
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-header">
            <img src={assets.cart_image} alt="" />
            <p>Your cart is empty!</p>
            <p className="info">
              Browse our categories and discover our best deals!
            </p>
            <Link to="/products" className="start-shopping-cart">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="item-details">
                      <h3>{item.name} <br /> <span>{item.storage}</span></h3>
                      <div className="item-price">
                        <p>{item.price}</p>
                      </div>
                    </div>
                    <div className="buttons">
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                      <button 
                        className="checkout-btn"
                        onClick={() => handleSingleCheckout(item)}
                      >
                        Checkout This Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={handleCheckoutAll}
              className="checkout-all-btn"
            >
              Checkout All Items ({cartItems.length})
            </button>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

Cart.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
  isAuthModalOpen: PropTypes.bool.isRequired,
};

export default Cart;