import { Link } from "react-router-dom";
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

function Dashboard() {
  const purchasedItems = [
    {
      image: assets.dashboard_fridge,
      itemName: "Table-Top Fridge - Nexus 250 - Silver",
      seller: "Christopher Doe",
      shop: "KK House Electronics",
      location: "Ahoe, Ho",
      quantity: 1,
      price: 4500.0,
      status: "Bought",
    },
  ];

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
            <li>
              <SiSellfy />
              Sell
            </li>
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
          <p>
            <RiLogoutCircleRLine />
            Logout
          </p>
        </div>

        <div className="seller-profile">
          <div className="details">
            <img src={assets.dashboard_profile} alt="profile" />
            <p>Christopher Doe</p>
            <p>Seller</p>
          </div>
          <div className="liberal">
            <p>
              <BiSolidEditAlt /> Edit Profile
            </p>
            <p>
              <BiSolidCoupon />
              Coupon
            </p>
          </div>
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
    </>
  );
}

export default Dashboard;
