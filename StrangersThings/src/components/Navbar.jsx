import { Link } from "react-router-dom";
import Logout from '../components/Logout'

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

      <button className="button" onClick={(Logout)}>Logout</button>
    </nav>
  );
};

export default Navbar;
