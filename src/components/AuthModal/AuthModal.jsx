import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useUser } from "../../context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import "./AuthModal.css";
import { assets } from "../../assets/assets";

function AuthModal({ isOpen, onClose }) {
  const [contactType, setContactType] = useState("email");
  const [formData, setFormData] = useState({
    contact: "",
    password: "",
  });

  const { login } = useUser();
  const navigate = useNavigate();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (id === "contact") {
      setContactType(value.includes("@") ? "email" : "phone");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically make an API call to authenticate
    // For now, we'll simulate a successful login
    const userData = {
      contact: formData.contact,
      profilePic: "https://via.placeholder.com/40", // Default profile pic
    };

    login(userData);
    onClose();
    navigate("/");
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>
          <IoMdClose />
        </button>

        <h2>Welcome To Pawnpal</h2>
        <p className="subtitle">Sign in to continue to PawnPal</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact">Email/Phone Number</label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter email or phone number"
              pattern="^(?:\d{10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
              title="Please enter a valid email or 10-digit phone number"
              required
            />
            <span className="input-type">
              {contactType === "email" ? "Using Email" : "Using Phone Number"}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or sign in with</span>
        </div>

        <div className="social-buttons">
          <img src={assets.signup_google} alt="google icon" />
          <img src={assets.signup_facebook} alt="facebook icon" />
          <img src={assets.signup_instagram} alt="instagram icon" />
        </div>

        <p className="switch-mode">
          New Here?{" "}
          <Link 
            to="/signup" 
            onClick={onClose}
            style={{ cursor: 'pointer', color: '#FE6C2C', textDecoration: 'none' }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;
