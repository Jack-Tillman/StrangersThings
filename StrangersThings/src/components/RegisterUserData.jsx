import { useState } from "react"


export default async function RegisterUser() {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    try {
        const responce = await fetch("https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/register", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                user: {
                username: username,
                password: password
                    }
                })
            
        });
        const result = await responce.json();
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }

}