/* has all the API requests  */

const COHORT_NAME = "2306-ftb-et-web-am";
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

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
};

/* COMPLETE */
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

/* COMPLETE */
export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const result = await response.json();
    sessionStorage.token = result.data.token
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

/* 
 INCOMPLETE 
 - Need the bearer token variable
 - Not sure if postObject will need to be destructured when passing it as an argument 
 - postObject is a stand-in temporary name for the variable that has all the edits a user makes to the post (title, description, etc), 
 so Jack will edit this function after create post is finished to make sure this call is functional 

 */
 export const updatePost = async (postObject, token) => {
  try {
    // You will need to insert a variable into the fetch template literal
    // in order to make the POST_ID dynamic.
    // 5e8d1bd48829fb0017d2233b is just for demonstration.
    const response = await fetch(`${API_URL}/posts/${postObject.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: `${postObject.title}`,
          description: `${postObject.description}`,
          price: `${postObject.price}`,
          location: `${postObject.location}`,
          willDeliver: `${postObject.willDeliver}`
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
 }

/* 
FUNCTIONAL 
*/

export const makePost = async (postObject, token) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: `${postObject.title}`,
          description: `${postObject.description}`,
          price: `${postObject.price}`,
          location: `${postObject.location}`,
          willDeliver: `${postObject.willDeliver}`
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
  
}
export async function FetchMeData() {
  const token = sessionStorage.getItem("token");
  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/me`,
      { method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result
    
  } catch (err) {
    console.error(err);
  }
}

export const fetchPostById = async (token) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
    /*To get just posts, do result.data.posts*/
    return result;
  } catch (error) {
    console.error(error, error.message);
  }
};

export const deletePost = async (token, postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const myData = async (token) => {

  try {
    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const postMessage = async (messageId, token, messageBody) => {
  try {
    const response = await fetch(`${API_URL}/posts/${messageId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: `${messageBody}`
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}