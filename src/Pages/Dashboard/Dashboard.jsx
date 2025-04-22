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
import { useState } from "react";
import LogoutPopup from "../../components/LogoutPopup/LogoutPopup";

function Dashboard({ setShowAuthModal, isAuthModalOpen }) {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

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

  return (
    <>
      <Navbar
        setShowAuthModal={setShowAuthModal}
        isAuthModalOpen={isAuthModalOpen}
      />
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

        <div className="items-list">
          {purchasedItems.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="top-selling-items">
        <img src={assets.Phone} alt="" />
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
