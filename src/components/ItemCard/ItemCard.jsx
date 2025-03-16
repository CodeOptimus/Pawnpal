import PropTypes from "prop-types";
import "./ItemCard.css";

function ItemCard({
  image,
  itemName,
  seller,
  shop,
  location,
  quantity,
  price,
  status,
}) {
  return (
    <div className="item-card">
      <div className="item-info">
        <img src={image} alt={itemName} />
        <div className="item-details">
          <p className="item-name">{itemName}</p>
          <p>Seller: {seller}</p>
          <p>Shop: {shop}</p>
          <p>Location: {location}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className="item-status">
        <p className="status">{status}</p>
        <p className="price">GHC {price.toLocaleString()}</p>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
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
