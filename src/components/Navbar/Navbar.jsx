import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-area">
          <p className="logo theme">LOGO</p>
          <span>Sell on PawnPal</span>
        </div>
        <div className="cto">
          <img
            src={assets.telephone_icon}
            alt="telephone icon"
            className="theme"
          />
          <span>Call to Order</span>
        </div>
        <div className="tease">
          <p>Hot deals just for you | We got you covered | Falaa deals</p>
        </div>
      </div>

      <div className="header-main">
        <h2>PAWN <span className="make-orange">PAL</span></h2>
        <input type="text" />
      </div>
    </header>
  );
}

export default Navbar;
