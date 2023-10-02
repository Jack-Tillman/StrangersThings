import { useState, useEffect } from "react";
import { registerUser } from "../API/index";
import { useNavigate } from "react-router-dom";

const Register = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated") || false
  );
  const navigate = useNavigate();

  //update token state to be the token if authenticated state changes
  useEffect(() => {
    if (authenticated) {
      setToken(authenticated);
    }
  }, [authenticated]);

  function handleUserRegistration(e) {
    e.preventDefault();

    const fetchToken = async (username, password) => {
      try {
        const newUser = await registerUser(username, password);
        console.log(newUser);
        if (newUser.success) {
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setAuthenticated(newUser.data.token);
          sessionStorage.setItem("token", newUser.data.token);
          setSuccess(true);
          return newUser;
        }
      } catch (error) {
        console.error(error, error.message);
      }
    };
    fetchToken(username, password);
  }

  return (
    <>
      {success && (
        <div id="success-notification">
          <p>Registration successful!</p>
          <button
            id="home-btn"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      )}
      {!success && (
        <form className="styleForm">
          <label htmlFor="username">
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              minLength="5"
              maxLength="20"
              value={password}
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="confirmPassword">
            <input
              className="input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              minLength="5"
              maxLength="20"
              value={confirmPassword}
              required
              autoComplete="off"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="button" onClick={handleUserRegistration}>
              Register Me
            </button>
          </label>
        </form>
      )}
    </>
  );
};

export default Register;
