import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
  // state to keep all posts, useful to render all posts
  const [posts, setPosts] = useState([]);
  // state to track any errors, useful for conditional rendering
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPosts() {
      const APIResponse = await fetchAllPosts();
      console.log(APIResponse);
      if (APIResponse.success) {
        setPosts(APIResponse.data.posts);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPosts();
  }, []);

  return (
    <>
      {/*conditionally render the errors only if there are errors in state*/}
      {error && <p className="error-notification">{error.message}</p>}
      {/*conditionally render the posts only if there are posts in state*/}
      {posts && (
        <div id="all-post-container">
          {posts.map((post) => {
            return (
              <div id="post-container" key={post._id}>
              {/*I gave each element within post-container class of post as well as specific classname so that */}
              <h2 className="post-h2">{post.title}</h2>
              <h3 className="post-h3">{post.author.username}</h3>
              <p className="post-description">{post.description}</p>
              <p className="post-price">{post.price}</p>
              <p className="post-createdAt">{post.createdAt}</p>
              <p className="post-updatedAt">{post.updatedAt}</p>
              <p className="post-location">{post.location}</p>
              <p className="post-willDeliver">{post.willDeliver}</p>
              <button
              className="details-button"
              id="details-button"
                onClick={() => {
                  //when clicked, take user to detailed post view which will need to use useParams to render the post
                  navigate(`/${post._id}`);
                }}
              >
                See Details
              </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
