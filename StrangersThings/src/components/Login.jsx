import { useState } from 'react'

const Login = ({token, setToken}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


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