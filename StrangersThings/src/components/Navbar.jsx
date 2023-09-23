
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav>
           <Link to="/">Home</Link>
           <Link to="/profile">Profile</Link>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>   
        </nav>
    )
}
