import { useState } from "react"
import { login } from "../API";

const RenderLoginForm = ({token, setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState(null);
    const COHORT_NAME = '2306-ftb-et-web-am';
    const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/login`, {
    //             method: "POST",
    //             headers: {
    //               'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //               user: {
    //                 username: username,
    //                 password: password}
    //             })
    //           });
    //           const result = await response.json();
    //           setToken(result.token);
    //           console.log(result);
              
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }
    const login = async (event) => {
        try { event.preventDefault();
            const response = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                header: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: {username},
                        password: {password}
                    }
                })
            });
            const result = await response.json();
            console.log(result);
            return result
        } catch(err) {
            console.error(err);
        } 
     }
    
        return (
            <>
                <h2>User Login</h2>
                <form onSubmit={login}>
                    <label>Username: 
                        <input value={username} name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}
                    /></label>
                    <label>Password: 
                    <input value={password} name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}
                    /></label>
                    <button type="submit">Submit</button>
                </form>
            </>  
            
) 

};
export default RenderLoginForm