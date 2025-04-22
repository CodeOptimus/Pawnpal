import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import "./Checkout.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";




function Checkout({ setShowAuthModal, isAuthModalOpen }) {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [checkoutItems, setCheckoutItems] = useState([]);

  useEffect(() => {
    // Get items from localStorage
    const items = JSON.parse(localStorage.getItem("checkoutItems") || "[]");
    if (items.length === 0) {
      navigate("/cart");
      return;
    }
    setCheckoutItems(items);
  }, [navigate]);

  // Calculate totals
  const itemsTotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );
  const deliveryCharge = deliveryMethod === "doorstep" ? 15 : 0;
  const serviceCharge = 0;
  const orderTotal = itemsTotal + deliveryCharge + serviceCharge;

  const handleBack = () => {
    navigate(-1); // Goes back to previous page
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  return (
    <>
      <Navbar
        setShowAuthModal={setShowAuthModal}
        isAuthModalOpen={isAuthModalOpen}
      />

      <div className="checkout-container">
        {/* <div className="back-section">
          <span onClick={handleBack} className="back-btn">
            <IoArrowBack className="back-arrow" />
            Back
          </span>
        </div> */}

        <div className="top">
          <span onClick={handleBack} style={{ cursor: "pointer", display: "flex", alignItems: "center"}}>
          <IoIosArrowBack />
            Back
          </span>
          <span>Checkout</span>
        </div>

        <div className="order-indexing">
          <div className="order-index">
            <h4>Order #001</h4>
          </div>
          <div className="shop-name">
            <h4>Shop Name:</h4>
            <p>Node8 Fashion Home</p>
          </div>
          <div className="invoice">
            <h4>Invoice:</h4>
            <p>INV: 0001</p>
          </div>
          <div className="date-created">
            <h4>Date Created:</h4>
            <p>March 1st, 2025</p>
          </div>
        </div>

        <div className="order-mini-summary">
          {checkoutItems.map((item) => (
            <div key={item.id} className="item-selected-details">
              <div className="product0">
                <h3>Item</h3>
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name} <br /> <span>{item.storage}</span></p>
                </div>
              </div>
              <div className="quantity-ordered">
                <h3>Quantity</h3>
                <p>{item.quantity}</p>
              </div>
              <div className="order-amount">
                <h3>Amount</h3>
                <p>GHC {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout-grid">
          <div className="first-section">
            <form>
              <label htmlFor="deliveryMethod">Select a Delivery Method</label>
              <br />
              <select
                id="deliveryMethod"
                value={deliveryMethod}
                onChange={handleDeliveryMethodChange}
              >
                <option value="pickup">Pick Up</option>
                <option value="doorstep">Doorstep</option>
              </select>
            </form>

            <div className="shop-info">
              <h2>Shop Information</h2>

              <div className="shop-info-grid">
                <div className="pickup-address">
                  <h3>Pickup Address</h3>
                  <p>3517 H. Dome Guinness,</p>
                  <p>Ho, Ghana</p>
                </div>
                <div className="operation-hours">
                  <h3>Operating Hours</h3>
                  <p>
                    Opens From <span>9:00am - 10:00pm</span>
                  </p>
                </div>
                <div className="contact-information">
                  <h3>Contact Information</h3>
                  <p>
                    <span>Email</span>: pawnpal@ho.com
                  </p>
                  <p>
                    <span>Contact Number</span>: 0548513492
                  </p>
                </div>
                <div className="agent">
                  <h3>Contact Person Info</h3>
                  <p>
                    <span>Number</span>: 0548513492
                  </p>
                </div>
              </div>

              <div className="confirmation-process">
                <h3>Confirmation Process</h3>
                <div className="confirmation-process-info">
                  <p>
                    For a seamless and smooth confirmation and pick up,
                    <br />
                    the following will be required before pick up.
                  </p>
                  <ul>
                    <li>
                      A printed or digital Invoice (order number, order details)
                    </li>
                    <li>A valid ID</li>
                    <li>Proof of Payment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="second-part">
            <div className="order-summary">
              <h2>Order Summary</h2>

              <div className="final-summary quantity-and-price">
                <div className="number-of-items">
                  <p className="theme">Total Number of Items</p>
                  <p>
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}{" "}
                    Items
                  </p>
                </div>
                <div className="selected-item-price">
                  <p className="theme">Price</p>
                  <p>GHC {itemsTotal.toFixed(2)}</p>
                </div>
              </div>
              <span className="sub-total">GHC {itemsTotal.toFixed(2)}</span>

              <div className="final-summary delivery-charges">
                <div className="delivery-method">
                  <p className="theme">Delivery Method</p>
                  <span className="delivery-method-info">
                  <BsTruck size={20}/>
                  <p> {deliveryMethod === "pickup" ? "Pick Up" : "Doorstep"}</p>
                  </span>
                  <span className="delivery-method-info">
                  <IoLocationOutline size={20}/> 
                  <p>3517 H. Dome Guinness, <br /> Ho, Ghana</p>
                  </span>
                </div>
                <div className="delivery-charges">
                  <p className="theme">Charges</p>
                  <p>GHC {deliveryCharge.toFixed(2)}</p>
                </div>
              </div>
              <span className="sub-total">GHC {deliveryCharge.toFixed(2)}</span>

              <div className="total-amount">
                <div className="subtotal">
                  <p className="theme">Subtotal</p>
                  <p className="theme">GHC {itemsTotal.toFixed(2)}</p>
                </div>
                <div className="delivery-fee">
                  <p className="theme">Service Charge</p>
                  <p className="theme">GHC {serviceCharge.toFixed(2)}</p>
                </div>
                <div className="order-total">
                  <p className="theme">Order Total</p>
                  <p className="theme">GHC {orderTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="proceed-to-payment-btn"
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>
      <Footer />
    </>
  );
}

Checkout.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
  isAuthModalOpen: PropTypes.bool.isRequired,
};

export default Checkout;
