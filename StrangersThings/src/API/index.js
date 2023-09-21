/* has all the API requests  */

const registerUser = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/users/register`, {
                method: "POST",
                headers: {
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
                console.log(result)
            } catch(err) {
                console.error(err);
            }
            }
            
 const login = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
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