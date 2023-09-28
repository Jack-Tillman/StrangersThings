import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Logout from '../components/Logout'

const Navbar = () => {
  // const [loggedIn, setLoggedIn] = useState(false)
  
  // useEffect(() => {  
  //   async function renderNavbar() {
  //     const token = sessionStorage.getItem("token")
  //     if (token) { 
  //       console.log("logged in")
  //       setLoggedIn(true);
  // }}
  // renderNavbar()
  //   },[loggedIn]);

  return (
    // <div>
      <nav>
        <Link to="/" className="nav-item">
          Home
        </Link>
      {/* </nav> */}
    
      {/* {loggedIn ? (
        <nav> */}
        <Link to="/profile" className="nav-item">
        Profile
        </Link>
          <button className="button" onClick={Logout}>Logout</button>
        {/* </nav>) :  */}
        
        {/* (<nav> */}
        <Link to="/login" className="nav-item">
        Login
      </Link>
      <Link to="/register" className="nav-item">
        Register
      </Link>
      <Link to="/create" className="nav-item">
        Make a Post
      </Link>
    </nav>
  );
};


export default Navbar;
