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

