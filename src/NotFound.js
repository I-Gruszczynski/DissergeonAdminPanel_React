import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Page not found</h1>
      <p>
        <Link to="/tutorial">Go to Tutorial Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
