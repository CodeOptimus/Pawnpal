import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./SuccessPopup.css";

function SuccessPopup({ onClose }) {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="success-popup-overlay">
      <div className="success-popup">
        <img src={assets.success_icon} alt="Success" />
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase</p>
        <p>Your order has been confirmed</p>
        <button 
          className="continue-shopping-btn"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

SuccessPopup.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default SuccessPopup; 