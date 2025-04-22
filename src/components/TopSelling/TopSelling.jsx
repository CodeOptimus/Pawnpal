import { assets } from '../../assets/assets'
import './TopSelling.css'


function TopSelling() {
    return (
        <div className="top-selling-container">
            <h1>Top Selling Items</h1>
            <div className="top-selling-items">
                <div className="top-selling-item">
                    <img src={assets.hand_phone} alt="handphone" />
                </div>
            </div>
        </div>
    )
}

export default TopSelling;