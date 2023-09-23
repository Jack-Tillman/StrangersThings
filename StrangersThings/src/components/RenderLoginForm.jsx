import { useState } from "react"

const RenderLoginForm = ({token, setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[error, setError] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/login`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: username,
                    password: password}
                })
              });
              const result = await response.json();
              setToken(result.token);
              console.log(result);
              
        } catch(error) {
            console.log(error)
        }
    }
        return (
            <>
                <h2>User Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>Username: </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </>  
            
)

};
export default RenderLoginForm