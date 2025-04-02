import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../../contexts/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import { assets } from '../../assets/assets';
import "./Payment.css";

function Payment({ setShowAuthModal, isAuthModalOpen }) {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryMethod] = useState('pickup');


  const handleBack = () => {
    navigate(-1); // Goes back to previous page
  };


  const itemsTotal = cartItems.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  const deliveryCharge = deliveryMethod === 'doorstep' ? 50 : 0;
  const serviceCharge = 0;
  const orderTotal = itemsTotal + deliveryCharge + serviceCharge;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate('/success');
    } catch (error) {
      console.error('Payment failed:', error);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navbar setShowAuthModal={setShowAuthModal} isAuthModalOpen={isAuthModalOpen} />
      <div className="payment-container">
        <h1>Payment Details</h1>

        <span onClick={handleBack} style={{ cursor: 'pointer' }} className="back-btn">Back</span>
        
        <div className="method-selector">
              <button
                className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                Credit/Debit Card <br />
              </button>
              <button
                className={`method-btn ${paymentMethod === 'momo' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('momo')}
              >
                Mobile Money <br />
                <img src={assets.vodaphone_logo} alt="" />
                <img src={assets.mtn_logo} alt="" />
              </button>
            </div>

        <div className="payment-content">
          <div className="payment-methods">
            <form onSubmit={handlePayment} className="payment-form">
              {paymentMethod === 'card' ? (
                <>
                  <div className="form-group">
                    <label>Card Holder Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required 
                    />
                  </div>
                  <div className="card-details">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input 
                        type="text" 
                        placeholder="MM/YY"
                        maxLength="5"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input 
                        type="text" 
                        placeholder="123"
                        maxLength="3"
                        required 
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3>Choose a valid provide to complete your payment</h3>
                  <div className="forms-group">
                    <div className="form-group">
                    <label>Choose Provider <br /><span>Please select your mobile <br />money operator</span></label>
                    </div>
                    <div className="form-group">
                      <select required>
                        <option value="">Select Network</option>
                        <option value="mtn">MTN Mobile Money</option>
                        <option value="vodafone">Vodafone Cash</option>
                        <option value="airteltigo">AirtelTigo Money</option>
                      </select>
                    </div>
                    <div className="form-group">
                    <label>Mobile Money Number <br /><span>Enter your mobile money <br />number</span></label>
                    </div>
                    <div className="form-group">
                      <input 
                        type="tel" 
                        placeholder="0XX XXX XXXX"
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <p>Save this payment method to make your next payment fast and easier </p>
                      <input type="text" className="toggle-button" />
                    </div>
                  </div>
                </>
              )}
            </form>

            <button 
                type="submit" 
                className="pay-now-btn"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Proceed to Pay GH₵ ${calculateTotal().toFixed(2)}`}
            </button>
          </div>

            <div className="order-summary">
              <h2>Order Summary</h2>

              <div className="final-summary quantity-and-price">
                <div className="number-of-items">
                  <p className="theme">Total Number of Items</p>
                  <p>{cartItems.reduce((total, item) => total + item.quantity, 0)} Items</p>
                </div>
                <div className="selected-item-price">
                  <p className="theme">Price</p>
                  <p>GHC {itemsTotal.toFixed(2)}</p>
                </div>
              </div>
              <span className='sub-total'>GHC {itemsTotal.toFixed(2)}</span>

              <div className="final-summary delivery-charges">
                <div className="delivery-method">
                  <p className="theme">Delivery Method</p>
                  <p>{deliveryMethod === 'pickup' ? 'Pick Up' : 'Doorstep'}</p>
                  <p>3517 H. Dome Guinness, Ho, Ghana</p>
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
      <Footer />
    </>
  );
}

Payment.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
  isAuthModalOpen: PropTypes.bool.isRequired,
};

export default Payment; 