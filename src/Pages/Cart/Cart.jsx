import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import ItemCard from "../../components/ItemCard/ItemCard";
import "./Cart.css";

function Cart() {
  return (
    <>
      <Navbar />
      <div className="item-list">
        <ul>
          <li>
            <a href="#">Phone & Tablets</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Computer</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Bags</a>
          </li>
          <li>
            <a href="#">Motor</a>
          </li>
          <li>
            <a href="#">Bicycles</a>
          </li>
          <li>
            <a href="#">Furniture</a>
          </li>
          <li>
            <a href="#">Generator</a>
          </li>
          <li>
            <a href="#">Polytank</a>
          </li>
        </ul>
      </div>
      <div className="cart-container">
        <div className="cart-header">
          <img src={assets.cart_image} alt="" />
          <p>Your cart is empty!</p>
          <p className="info">Browse our categories and discover our best deals!</p>
          <Link to="/" className="start-shopping-cart">
            Start Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
