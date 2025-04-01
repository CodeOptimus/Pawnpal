import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../../contexts/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PropTypes from "prop-types";
import "./Payment.css";

function Payment({ setShowAuthModal, isAuthModalOpen }) {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

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
        
        <div className="payment-content">
          <div className="payment-methods">
            <div className="method-selector">
              <button
                className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <span className="method-icon">💳</span>
                Credit/Debit Card
              </button>
              <button
                className={`method-btn ${paymentMethod === 'momo' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('momo')}
              >
                <span className="method-icon">📱</span>
                Mobile Money
              </button>
            </div>

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
                  <div className="form-group">
                    <label>Mobile Money Number</label>
                    <input 
                      type="tel" 
                      placeholder="0XX XXX XXXX"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Network Provider</label>
                    <select required>
                      <option value="">Select Network</option>
                      <option value="mtn">MTN Mobile Money</option>
                      <option value="vodafone">Vodafone Cash</option>
                      <option value="airteltigo">AirtelTigo Money</option>
                    </select>
                  </div>
                </>
              )}

              <button 
                type="submit" 
                className="pay-now-btn"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Pay GH₵ ${calculateTotal().toFixed(2)}`}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="item-info">
                    <span className="item-name">{item.itemName}</span>
                    <span className="item-quantity">x {item.quantity}</span>
                  </div>
                  <span className="item-price">
                    GH₵ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Total Amount</span>
              <span>GH₵ {calculateTotal().toFixed(2)}</span>
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