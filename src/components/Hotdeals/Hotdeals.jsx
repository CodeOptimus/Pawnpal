import { assets } from "../../assets/assets";
import "./Hotdeals.css";

function Hotdeals() {
  return (
    <div className="hot-deals">
      <div className="deal-tails">
        <h1>Hot Deal Of The Day</h1>
        <p>Look Sharp Before E-finish ooh... else your eye go tear </p>

        <div className="timer">
          <h2>
            10 <span>Hours</span>
          </h2>
          <h2>
            30 <span>Minutes</span>
          </h2>
          <h2>
            30 <span>Seconds</span>
          </h2>
        </div>
        <a href="#" className="shop-now-btn">
          Shop Now
        </a>
      </div>
      <div className="toyota-container">
        <div className="boards">
          <img src={assets.toyota_board} alt="" className="board"/> 
          <img src={assets.maze} alt="" className="maze-board"/> 
        </div>
        
        <div className="toyota">
          <img src={assets.toyota_camry} alt="" />
        </div>
          
      </div>
    </div>
  );
}

export default Hotdeals;
