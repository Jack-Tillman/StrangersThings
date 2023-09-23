import { useState } from "react";
import { login } from "../API/index";

const Login = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUserRegistration(e) {
    e.preventDefault();
    //same process as in Register.jsx, but with validation step and without confirmPassword
    const loginUser = async (username, password) => {
      try {
        const loggedIn = await login(username, password);
        console.log(loggedIn);
        //if user logs in successfully, clear the form, otherwise don't clear the form
        if (loggedIn.success) {
          setUsername("");
          setPassword("");
        } else {
          console.log(loggedIn);
        }
        return loggedIn;
      } catch (error) {
        console.error(error, error.message);
      }
    };
    loginUser(username, password);
  }

  return (
    <>
      <form>
        <label htmlFor="username">
          <input
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
        <button onClick={handleUserRegistration}>Log In</button>
      </form>
    </>
  );
};

export default Login;
