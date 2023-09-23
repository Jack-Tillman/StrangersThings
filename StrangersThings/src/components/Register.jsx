import { useState } from 'react'


const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [authenticated, setAuthenticated] = useState(null)

    async function handleUserRegistration(e) {
        e.preventDefault();
        await NewUser (username, password, token);
        if (e.target.password === e.target.confirmPassword) 
        authenticated;
    return (
        <form onSubmit={handleUserRegistration}>
            <label>
                <input type="text" />
            </label>
                <input type="submit" value="Submit" />
        </form>
        
    )}
}

export default Register;