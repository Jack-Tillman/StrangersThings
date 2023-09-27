import { useState } from "react";
import { login } from "../API/index";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(
    sessionStorage.getItem("authenticated") || false
  );

  function handleUserRegistration(e) {
    e.preventDefault();
    //same process as in Register.jsx, but with validation step and without confirmPassword
    const loginUser = async (username, password) => {
      try {
        const authenticated = await login(username, password, token);
        console.log(authenticated);
        //if user logs in successfully, clear the form, otherwise don't clear the form
        //set authenticated to true to enable posting/messaging/etc
        if (authenticated.success) {
          setUsername("");
          setPassword("");
          setAuthenticated(true);
        }
      } catch (error) {
        console.error(error, error.message);
      }
    };
    loginUser(username, password);
  }

  return (
    <>
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
        <button className="button" onClick={handleUserRegistration}>
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
