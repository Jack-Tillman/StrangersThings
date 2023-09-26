/* will also feature details and remove posts */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Post Details
export default function DetailedPosts({ post }) {
    const navigate = useNavigate();
    return (
        <div>
          <h3>{post.name}</h3>
          <button
            onClick={() => {
              navigate(`/${post.id}`);
            }}
          >
            See Details
          </button>
        </div>
      );
}

// Delete post
async function handleDelete() {
    try {
        const result = await deletePost(post.id);
        console.log(result);
        navigate("/");
    } catch (error) {
        console.error(error);
    }
};