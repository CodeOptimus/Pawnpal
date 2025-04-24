import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdMarkEmailUnread, MdSms } from "react-icons/md";
import { assets } from "../../assets/assets";
import "./Login.css";
import LoadingSpinner from "../../components/LoadingSpinner";

function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [step, setStep] = useState(1);
  const [contactType, setContactType] = useState("email");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    contact: "",
    password: "",
    fullName: "",
    email: "",
    phone: "",
    confirmPassword: "",
    verificationCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  //   const handleBack = () => {
  //     if (step > 1) {
  //       setStep(step - 1);
  //     } else {
  //       navigate(-1);
  //     }
  //   };

  const handleInputChange = (e) => {
    const { name, value, id } = e.target;
    const inputId = name || id; // Handle both name and id attributes
    setFormData((prev) => ({
      ...prev,
      [inputId]: value,
    }));

    if (inputId === "contact") {
      setContactType(value.includes("@") ? "email" : "phone");
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value !== "" && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      contact: formData.contact,
      profilePic: "https://via.placeholder.com/40",
      isAuthenticated: true,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    login(userData);
    navigate("/");
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 2) {
      // After signup form, go to OTP verification
      setStep(3);
    } else if (step === 3) {
      // After OTP verification, login the user and redirect to home
      const userData = {
        contact: formData.email || formData.contact,
        fullName: formData.fullName,
        profilePic: "https://via.placeholder.com/40",
        isAuthenticated: true,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      login(userData);
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      contact: formData.email,
      fullName: formData.fullName,
      profilePic: "https://via.placeholder.com/40",
      isAuthenticated: true,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    login(userData);
    navigate("/");
  };

  const renderStep = () => {
    switch (step) {
      case 1: // Login step (former AuthModal content)
        return (
          <div className="signup-step">
            <h2>Welcome To Pawnpal</h2>
            <p className="subtitle">
              Enter your e-mail or phone number to log into your PawnPal account
            </p>

            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-band">
                <label htmlFor="contact">Email/Phone Number</label>
                <input
                  type="text"
                  id="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="eg.johndoe@example.com"
                  pattern="^(?:\d{10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
                  title="Please enter a valid email or 10-digit phone number"
                  required
                />
                {/* <span className="input-type">
                  {contactType === "email"
                    ? "Using Email"
                    : "Using Phone Number"}
                </span> */}
              </div>

              <div className="form-band">
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoEyeOutline size={20} />
                    ) : (
                      <IoEyeOffOutline size={20} />
                    )}
                  </span>
                </div>
                <span
                  className="forgot-password"
                  onClick={() => setStep(3)}
                  style={{
                    cursor: "pointer",
                    color: "#FE6C2C",
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    textAlign: "right",
                  }}
                >
                  Forgot Password?
                </span>
              </div>

              <button type="submit" className="submit-button">
                Login
              </button>
            </form>

            <div className="divider">
              <span>Or sign in with</span>
            </div>

            <div className="social-buttons">
              <img src={assets.signup_google} alt="google icon" />
              <img src={assets.signup_facebook} alt="facebook icon" />
              <img src={assets.signup_instagram} alt="instagram icon" />
            </div>

            <p className="switch-mode">
              New Here?{" "}
              <span
                onClick={() => setStep(2)}
                style={{
                  cursor: "pointer",
                  color: "#FE6C2C",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        );

      case 2:
        return (
          <div className="signup-step">
            <h2>Create Account</h2>
            <p className="subtitle">Enter your personal details</p>
            <form onSubmit={handleNext}>
              <div className="form-band">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="eg: John Doe"
                  required
                />
              </div>
              <div className="form-band">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="eg: johndoe@gamil.com"
                  required
                />
              </div>
              <div className="form-band">
                <label>Contact</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="eg: 0544444443"
                  required
                />
              </div>
              <div className="form-band">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoEyeOutline size={20} />
                    ) : (
                      <IoEyeOffOutline size={20} />
                    )}
                  </span>
                </div>
              </div>
              <div className="form-band">
                <label>Confirm Password</label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOutline size={20} />
                    ) : (
                      <IoEyeOffOutline size={20} />
                    )}
                  </span>
                </div>
              </div>

              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>

            <div className="divider">
              <span>Or sign up with</span>
            </div>

            <div className="social-buttons">
              <img src={assets.signup_google} alt="google icon" />
              <img src={assets.signup_facebook} alt="facebook icon" />
              <img src={assets.signup_instagram} alt="instagram icon" />
            </div>

            <p className="switch-mode">
              Already have an account?{" "}
              <span
                onClick={() => setStep(1)}
                style={{
                  cursor: "pointer",
                  color: "#FE6C2C",
                  textDecoration: "none",
                }}
              >
                Sign In
              </span>
            </p>
          </div>
        );

      case 3:
        return (
          <div className="signup-step">
            <h2>Verify Your Contact</h2>
            <p className="subtitle">
              Enter the 4-digit code sent to your{" "}
              {contactType === "email" ? "email" : "phone"}
            </p>
            <form onSubmit={handleNext} className="otp-form">
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Backspace" && !digit && index > 0) {
                        const prevInput = document.getElementById(
                          `otp-${index - 1}`
                        );
                        if (prevInput) {
                          prevInput.focus();
                          const newOtp = [...otp];
                          newOtp[index - 1] = "";
                          setOtp(newOtp);
                        }
                      }
                    }}
                    className="otp-input"
                  />
                ))}
              </div>
              <p className="resend-code">Resend code in 60s</p>

              <button type="submit" className="verify-btn">
                Verify Code
              </button>

              <div className="method-to-receive-otp">
                <div className="otp-method">
                  <MdMarkEmailUnread size={24} color="white" />
                </div>
                <div className="otp-method">
                  <MdSms size={24} color="white" />
                </div>
              </div>
              {/* <button type="button" className="resend-btn">
                Resend Code
              </button> */}
            </form>
          </div>
        );

      case 4:
        return (
          <div className="signup-step">
            <h2>Reset Password</h2>
            <p className="subtitle">Enter your new password</p>
            <form onSubmit={handleNext}>
              <div className="form-group">
                <label>New Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <IoEyeOffOutline size={20} />
                    ) : (
                      <IoEyeOutline size={20} />
                    )}
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <div className="password-input">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm new password"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOffOutline size={20} />
                    ) : (
                      <IoEyeOutline size={20} />
                    )}
                  </span>
                </div>
              </div>
              <button type="submit" className="next-btn">
                Reset Password
              </button>
            </form>
          </div>
        );

      case 5:
        return (
          <div className="signup-step">
            <h2>Almost Done!</h2>
            <p className="subtitle">Review your information</p>
            <div className="review-info">
              <p>
                <strong>Name:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <button type="submit" className="submit-btn">
                Complete Signup
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="signup-container">
      {/* <div className="back-section">
        <span onClick={handleBack} className="back-btn">
          <IoIosArrowBack />
          Back
        </span>
      </div> */}
      {/* <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: step === 1 ? "0%" : step === 2 ? "100%" : "0%",
          }}
        />
      </div> */}
      {renderStep()}
    </div>
  );
}

export default Login;
