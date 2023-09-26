import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

async function Searchbar() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

    const postsToDisplay = searchParam ? posts.filter((post) => 
    post.title.toLowerCase().includes(searchParam)) : posts;
  return (<>
    
      <div>
        <label>
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
export default Searchbar
