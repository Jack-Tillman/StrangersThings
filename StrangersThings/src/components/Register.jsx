import { useState } from 'react'


const Register = ({username, setUsername, password, setPassword, token, setToken}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    async function handleUserRegistration(e) {
        e.preventDefault();
        await NewUser (username, password, token);
        if (e.target.password === e.target.confirmPassword) 
    }
    return (
        <form onSubmit={handleUserRegistration}>
            <label>
                <input type="text" />
            </label>
                <input type="submit" value="Submit" />
        </form>
    )
}

export default Login