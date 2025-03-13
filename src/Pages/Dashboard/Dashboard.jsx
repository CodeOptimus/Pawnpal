// import { assets } from "../../assets/assets";
import { MdPerson } from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { IoBagHandleOutline } from "react-icons/io5";
import { SiSellfy } from "react-icons/si";
import { IoHelpCircle } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <div className="navigation">
          <p>
            <MdPerson />
            My Account
          </p>
          <ul>
            <li>
              <RiHome7Fill />
              Home
            </li>
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
            <li>
              <MdShoppingCart />
              My Cart
            </li>
            <li>
              <MdPermContactCalendar />
              Contact
            </li>
            <li>
              <IoIosSettings />
              Setting
            </li>
          </ul>
          <p>
            <RiLogoutCircleRLine />
            Logout
          </p>
        </div>
        <div style={{ flex: 1, padding: "20px" }}>
          {/* Main content area */}
          <h1>Dashboard Content</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
