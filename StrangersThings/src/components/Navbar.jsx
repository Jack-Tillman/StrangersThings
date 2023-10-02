/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ token, setToken }) => {
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

  useEffect(()=>{
    async function renderNavbar(){
      const storageToken = sessionStorage.getItem("token");
      if (storageToken) {
        setToken(storageToken);
      } else {
        setToken(null);
      }
    }
    renderNavbar();
  }, [setToken, token])
 const navigate = useNavigate();
  return (
    // <div>
    <nav>
      <Link to="/" className="nav-item">
        Home
      </Link>
      {/* only render these links if user is not logged in*/}
      
      {!token && (
        <>
          <Link to="/login" className="nav-item">
            Login
          </Link>
          <Link to="/register" className="nav-item">
            Register
          </Link>
        </>
      )}
       {/* only render these links if user is logged in*/}
      {token && (
        <>
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
          <Link to="/create" className="nav-item">
            Make a Post
          </Link>
          <Link to="/logout" className="nav-item" onClick={()=>{
            setToken(null);
          }}>
            Log Out
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
