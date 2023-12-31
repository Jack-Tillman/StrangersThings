import { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import Searchbar from "./Searchbar";
import PostListName from "./PostListName";

const Home = ({ token }) => {
  // state to keep all posts, useful to render all posts
  const [posts, setPosts] = useState([]);
  // state to track any errors, useful for conditional rendering
  const [error, setError] = useState(null);
  // state to track user input for search bar
  const [searchParam, setSearchParam] = useState("");

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

  const postsToDisplay = searchParam
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParam))
    : posts;

  return (
    <>
      {/*conditionally render the errors only if there are errors in state*/}
      {error && <p className="error-notification">{error.message}</p>}
      {/*conditionally render the posts only if there are posts in state*/}

      <div id="searchbar-container">
        <label htmlFor="searchbar">
          Search Posts:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      {postsToDisplay && (
        <div id="all-post-container">
          {postsToDisplay.map((post) => {
            return <PostListName key={post._id} post={post} token={token} />;
          })}
        </div>
      )}
    </>
  );
};

export default Home;
