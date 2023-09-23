import { useState } from 'react'
import Register from './Register'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    return (
        <form>
            <label>
                <input type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <label>
                <input type="password"
                        name="password"
                        placeholder="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}/>
            </label>
        </form>
    )
}

export default Login