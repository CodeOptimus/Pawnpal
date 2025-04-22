import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { assets } from "../../assets/assets";
import PropTypes from "prop-types";
import { useCart } from "../../contexts/CartContext";
import "./Products.css";

function Products({ setShowAuthModal, isAuthModalOpen }) {
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }));
  };

  const handleAddToCart = (product) => {
    setAddedItems((prev) => ({
      ...prev,
      [product.id]: true,
    }));
    addToCart({
      ...product,
      image: assets.iphone13_for_products,
      quantity: quantities[product.id] || 1,
    });
  };

  const products = [
    {
      id: 1,
      name: "Iphone 13pro max",
      storage: "8gig Ram & 128Rom",
      price: "4500.00",
    },
    {
      id: 2,
      name: "Iphone 13pro max",
      storage: "8gig Ram & 128Rom",
      price: "4500.00",
    },
    {
      id: 3,
      name: "Iphone 13pro max",
      storage: "8gig Ram & 128Rom",
      price: "4500.00",
    },
    {
      id: 4,
      name: "Iphone 13pro max",
      storage: "8gig Ram & 128Rom",
      price: "4500.00",
    },
    {
      id: 5,
      name: "Iphone 13pro max",
      storage: "8gig Ram & 128Rom",
      price: "4500.00",
    },
    {
      id: 6,
      // image: {assets.iphone13_for_products},
      name: "Iphone 13pro max",
      storage: "8gig Ram & 128Rom",
      price: "4500.00",
    },
  ];

  return (
    <>
      <Navbar
        setShowAuthModal={setShowAuthModal}
        isAuthModalOpen={isAuthModalOpen}
      />
      <div className="products-container">
        <div className="products-header">
          <h1>Phones and Accessories</h1>
          <p>We give you quality and affordable products</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="product-image">
                <img src={assets.iphone13_for_products} alt="" />
              </div>
              <div className="product-details">
                <div className="top">
                  <div className="detail">
                    <h2>
                      {product.name} <br />
                      Charger & Earphone
                    </h2>
                    <p className="storage-details">{product.storage}</p>
                  </div>
                  <div className="price">GHC {product.price}</div>
                </div>

                <div className="bottom">
                  <div className="review">
                    <img src={assets.stars} alt="" />
                  </div>
                  <div className="product-actions">
                    {!addedItems[product.id] ? (
                      <>
                        <div className="quantity-controls">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="quantity-btn"
                          >
                            -
                          </button>
                          <span>{quantities[product.id] || 1}</span>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="add-to-cart-btn"
                        >
                          <img src={assets.add_to_cart} alt="" />
                          Add to Cart
                        </button>
                      </>
                    ) : (
                      <button className="added-to-cart-btn" disabled>
                        {quantities[product.id] || 1} Item
                        {quantities[product.id] > 1 ? "s" : ""} Added
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

Products.propTypes = {
  setShowAuthModal: PropTypes.func.isRequired,
  isAuthModalOpen: PropTypes.bool.isRequired,
};

export default Products;
