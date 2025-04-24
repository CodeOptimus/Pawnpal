import { Link, Navigate, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { MdPerson } from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { SiSellfy } from "react-icons/si";
import { IoHelpCircle } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { BiSolidCoupon } from "react-icons/bi";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import PropTypes from "prop-types";
import { useUser } from "../../context/UserContext";
import { useState, useEffect } from "react";
import LogoutPopup from "../../components/LogoutPopup/LogoutPopup";
import LoadingSpinner from "../../components/LoadingSpinner";

function Dashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const purchasedItems = [
    {
      image: assets.dashboard_fridge || "",
      itemName: "Table-Top Fridge - Nexus 250 - Silver",
      seller: "Christopher Doe",
      shop: "KK House Electronics",
      location: "Ahoe, Ho",
      quantity: 1,
      price: 4500.0,
      status: "Bought",
    },
  ];

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    navigate("/");
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="navigation">
          <p>
            <MdPerson />
            My Account
          </p>
          <ul>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <li>
                <RiHome7Fill />
                Home
              </li>
            </Link>
            <li>
              <IoBagHandleOutline />
              Orders
            </li>
            <Link
              to="/seller-signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <SiSellfy />
                Sell
              </li>
            </Link>
            <li>
              <IoHelpCircle />
              Help
            </li>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>
                <MdShoppingCart />
                My Cart
              </li>
            </Link>
            <li>
              <MdPermContactCalendar />
              Contact
            </li>
            <li>
              <IoIosSettings />
              Setting
            </li>
          </ul>

          <button>Close Account</button>
          <p
            onClick={handleLogoutClick}
            style={{ cursor: "pointer" }}
            className="logout-option"
          >
            <RiLogoutCircleRLine />
            Logout
          </p>
        </div>
        <div className="seller-profile">
          <div className="seller-profile-left">
            <img src={assets.dashboard_profile} alt="" />
            <h2>Christopher Doe</h2>
            <p>Seller</p>
          </div>
          <div className="seller-profile-right">
            <p className="edit-profile">
              <BiSolidEditAlt /> Edit Profile
            </p>
            <p className="coupons">
              <BiSolidCoupon /> Coupons
            </p>
          </div>
        </div>

        <div className="seller-items-list">
          <div className="item-and-details">
            <img src={assets.dashboard_fridge} alt="" />
            <div className="item-details-info">
              <p>
                <span>Item:</span> Table-Top Fridge - Nexus 250 - Silver
              </p>
              <p>
                <span>Seller:</span>Christopher Doe
              </p>
              <p>
                <span>Shop:</span>KK House Electronics
              </p>
              <p>
                <span>Location:</span>Ahoe, Ho
              </p>
              <p>
                <span>Quantity:</span>1
              </p>
            </div>
          </div>

          <div className="buy-details">
            <p className="bought">Bought</p>
            <p className="price">GHC 4500.00</p>
          </div>
        </div>
      </div>

      <div className="top-selling-items">
        <h2>Top Selling Items</h2>
        <div className="top-selling-items-list">
          <img src={assets.xiaomi_phone} alt="" />
          <img src={assets.hand_phone} alt="" />
          <img src={assets.xiaomi_phone} alt="" />
          <img src={assets.hand_phone} alt="" />
          <img src={assets.xiaomi_phone} alt="" />
          <img src={assets.hand_phone} alt="" />
          <img src={assets.xiaomi_phone} alt="" />
          <img src={assets.hand_phone} alt="" />
          <img src={assets.xiaomi_phone} alt="" />
          <img src={assets.hand_phone} alt="" />
          {/* <img src={assets.xiaomi_phone} alt="" /> */}
        </div>
      </div>
      <Footer />

      {showLogoutPopup && (
        <LogoutPopup
          onConfirm={handleLogoutConfirm}
          onCancel={handleLogoutCancel}
        />
      )}
    </>
  );
}

Dashboard.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
  isAuthModalOpen: PropTypes.bool.isRequired,
};

export default Dashboard;
