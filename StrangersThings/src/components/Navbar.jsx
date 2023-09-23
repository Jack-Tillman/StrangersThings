import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  return (
    <nav>
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/profile" className="nav-item">
        Profile
      </Link>
      <Link to="/login" className="nav-item">
        Login
      </Link>
      <Link to="/register" className="nav-item">
        Register
      </Link>
    </nav>
  );
};

export default Navbar;
