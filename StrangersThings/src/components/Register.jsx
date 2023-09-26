import { useState } from "react";
import { registerUser } from "../API/index";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(sessionStorage.getItem("authenticated")|| false);
  const [token, setToken] = useState(null);

  function handleUserRegistration(e) {
    e.preventDefault();

    const fetchToken = async (username, password, token) => {
      try {
        const newUser = await registerUser(username, password, authenticated, token);
        console.log(newUser);
        if (newUser.success) {
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setAuthenticated(true);
          sessionStorage.setItem("token", newUser.data.token);

          return newUser;
        } else {
          console.log(token);
        }
      } catch (error) {
        console.error(error, error.message);
      }      
    }
    fetchToken(username, password, token);
  }
    
  return (
    <>
      <form className="styleForm">
        <label htmlFor="username">
          <input className="input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input className="input"
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
          <input className="input"
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
          <button className="button" onClick={handleUserRegistration}>Register Me</button>
        </label>
      </form>
    </>
  );
}

export default Register;