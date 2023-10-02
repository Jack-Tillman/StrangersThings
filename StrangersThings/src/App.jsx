import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import "./App.css";
import Profile from "./components/Profile";
import DetailedPosts from "./components/DetailedPosts";
import Logout from "./components/Logout";

function App() {
  const [token, setToken] = useState(null);
  const storageToken = sessionStorage.getItem("token");
  //check for token from storage and if found, update token state with the token 
  useEffect(() => {
    async function getToken(storageToken) {
      if (storageToken) {
        setToken(storageToken);
      } else {
        return;
      }
      console.log(token);
    }
    getToken(storageToken);
  },[token, setToken, storageToken]);
  return (
    <>
      <BrowserRouter>
        <Navbar token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailedPosts />} />
          <Route path="/create" element={<CreatePost />} />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route
            path="/register"
            element={<Register token={token} setToken={setToken} />}
          />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route
            path="/logout"
            element={<Logout token={token} setToken={setToken} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
