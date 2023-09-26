import { useState, useEffect } from "react";

function Searchbar({ posts, setPosts }) {
  const [searchParam, setSearchParam] = useState("");

  const postsToDisplay = searchParam
    ? posts.filter((post) => post.title.toLowerCase().includes(searchParam))
    : posts

  return (
    <>
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
    </>
  );
}
export default Searchbar;
