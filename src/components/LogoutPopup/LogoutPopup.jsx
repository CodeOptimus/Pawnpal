import PropTypes from "prop-types";
import "./LogoutPopup.css";

function LogoutPopup({ onConfirm, onCancel }) {
  return (
    <div className="logout-popup-overlay">
      <div className="logout-popup">
        <h2>Logout Confirmation</h2>
        <p>Are you sure you want to logout?</p>
        <div className="logout-buttons">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

LogoutPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default LogoutPopup; 