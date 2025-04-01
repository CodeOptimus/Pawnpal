import { useCart } from "../../contexts/CartContext";
import PropTypes from "prop-types";
import "./ItemCard.css";

function ItemCard({
  id,
  image,
  itemName,
  seller,
  shop,
  location,
  quantity,
  price,
  status,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      itemName,
      price,
      quantity: 1
    });
  };

  return (
    <div className="item-card">
      <div className="item-info">
        <img src={image} alt={itemName} />
        <div className="item-details">
          <h3>{itemName}</h3>
          <p>Seller: {seller}</p>
          <p>Shop: {shop}</p>
          <p>Location: {location}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className="item-status">
        <p className="status">{status}</p>
        <p className="price">GHC {price.toLocaleString()}</p>
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  shop: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default ItemCard;
