import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import "./App.css";


function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar token={token} />
                <Home token={token} />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar token={token} />
                <Login token={token} setToken={setToken} />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar token={token} />
                <Register token={token} setToken={setToken} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
