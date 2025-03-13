import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-404">404</h1>
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-text">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="not-found-link">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound; 