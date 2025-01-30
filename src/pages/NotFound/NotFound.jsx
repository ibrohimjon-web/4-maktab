import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="mt-4 text-blue-600 hover:text-blue-700">
        Back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
