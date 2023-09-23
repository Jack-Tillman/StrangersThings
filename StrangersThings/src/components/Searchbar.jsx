import { useState, useEffect } from "react";
import PostListTitle from "./PostListTitle";

export default async function Searchbar() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");


    const postsToDisplay = searchParam ? posts.filter((post) => 
    post.title.toLowerCase().includes(searchParam)) : posts;
  return (
    <div>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
      </div>
      {postsToDisplay.map((post) => {
        return <PostListTitle key={post.id} post={post} />;
      })}
    </div>
  );
}
