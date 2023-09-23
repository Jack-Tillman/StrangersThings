

export default async function Authenticate({token, setToken}){
    {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/me`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ username, password })
              });
                const result = await response.json();
                console.log(result);
                return result
        }
             catch (err) {
                console.error(err)
            }
        }
    }
    