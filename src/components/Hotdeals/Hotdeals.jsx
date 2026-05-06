import { assets } from "../../assets/assets";
import "./Hotdeals.css";
import { useEffect, useMemo, useState } from "react";

function Hotdeals() {
  const target = useMemo(() => {
    // Fixed duration countdown (matches the UI copy style like "20h : 30m : 20s")
    const DURATION_MS = (20 * 60 * 60 + 30 * 60 + 20) * 1000;
    return Date.now() + DURATION_MS;
  }, []);

  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(0, target - Date.now())
  );

  useEffect(() => {
    const id = setInterval(() => {
      const next = Math.max(0, target - Date.now());
      setRemainingMs(next);
      if (next === 0) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  const hours = Math.floor(remainingMs / 3600000);
  const minutes = Math.floor((remainingMs % 3600000) / 60000);
  const seconds = Math.floor((remainingMs % 60000) / 1000);

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return (
    <div className="hot-deals">
      <div className="deal-tails">
        <h1>Hot Deal Of The Day</h1>
        <p>Look Sharp Before E-finish ooh... else your eye go tear </p>

        <div className="timer">
          <h2>
            {hh} <span>Hours</span>
          </h2>
          <h2>
            {mm} <span>Minutes</span>
          </h2>
          <h2>
            {ss} <span>Seconds</span>
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
