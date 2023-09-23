import { useState } from "react";
import { registerUser }  from "../API/index";

const Register = ({token, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

//   const [token, setToken] = useState("");

   function handleUserRegistration(e) {
    e.preventDefault();

    const fetchToken = async (username, password) => {
        try {
            const newUser = await registerUser(username, password);
            console.log(newUser);
            return newUser;
        } catch (error) {
            console.error(error, error.message);
        }
    } 
    fetchToken(username, password);
  }

  return (
    <>
        <form>
            <label htmlFor='username'>
                <input type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}/>
            </label>
            <label htmlFor='password'>
            <input type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    minLength="5"
                    maxLength="20"
                    value={password}
                    required
                    autoComplete="off"
                    onChange={e => setPassword(e.target.value)}>
                </input>
            </label>
            <label htmlFor='confirmPassword'>
            <input type="password"
                       name="confirmPassword"
                       id="confirmPassword"
                       placeholder="Confirm Password"
                       minLength="5"
                       maxLength="20"
                       value={confirmPassword}
                       required
                       autoComplete="off"
                       onChange={e => setConfirmPassword(e.target.value)}>
                </input>
                <button onClick={handleUserRegistration} >Register Me</button>
            </label>
        </form>
    </>
  );
};

export default Register;

/* 




  <form
          onSubmit={handleUserRegistration}
          style={{ width: "1200px", height: "1200px" }}
        >
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button className="register-btn" type="submit">
            Register
          </button>
        </form>



*/