/* has all the API requests  */

const COHORT_NAME = '2306-ftb-et-web-am';
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

/* COMPLETE */
export const fetchAllPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      const result = await response.json();
      console.log(result);
      /*To get just posts, do result.data.posts*/
      return result;
    } catch (error) {
      console.error(error, error.message);
    }
}

const registerUser = async () => {
    try {
        const response = await fetch(
            `${API_URL}/users/register`, {
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