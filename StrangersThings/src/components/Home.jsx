import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import Searchbar from '../components/Searchbar';

export const Home = () => {
    // state to keep all posts, useful to render all posts 
    const [posts, setPosts] = useState([]);
    // state to track any errors, useful for conditional rendering
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAllPosts() {
          const APIReesponse = await fetchAllPosts();
          console.log(APIReesponse);
          if (APIReesponse.success) {
            setPosts(APIReesponse.data.posts);
          } else {
            setError(APIReesponse.error.message);
          }
        }
        getAllPosts();
      }, []);

    return (
       <> 
       {/*conditionally render the errors only if there are errors in state*/}
       {error && <p className="error-notification">{error.message}</p>}
       {/*conditionally render the posts only if there are posts in state*/}
          {posts && 
            <div id="all-post-container">
                {posts.map((post) => {
                    return (
                        <div id="post-container" key={post._id}>
                          <h2>{post.title}</h2>
                          <h3>{post.author.username}</h3>
                          <p>{post.description}</p>
                          <p>{post.price}</p>
                          <p>{post.createdAt}</p>
                          <p>{post.updatedAt}</p>
                          <p>{post.location}</p>
                          <p>{post.willDeliver}</p>
                        </div>
                    )
                })}
            </div>}
       </>
    )
}