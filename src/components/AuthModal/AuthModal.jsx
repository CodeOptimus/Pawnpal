import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [contactType, setContactType] = useState("email");
  const [formData, setFormData] = useState({
    name: "",
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
    const [firstName, lastName] = (formData.name || "User Name").split(" ");
    const userData = {
      firstName,
      lastName,
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

        <h2>{isSignUp ? "Create Account" : "Welcome To Pawnpal"}</h2>
        <p className="subtitle">
          {isSignUp
            ? "Sign up to get started with PawnPal"
            : "Sign in to continue to PawnPal"}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required={isSignUp}
              />
            </div>
          )}

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
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>


        <div className="social-buttons">
          <button className="social-button google">
            <FcGoogle />
            Continue with Google
          </button>
          <button className="social-button facebook">
            <FaFacebook />
            Continue with Facebook
          </button>
        </div>

        
        <p className="switch-mode">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
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
