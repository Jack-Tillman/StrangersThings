import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostListTitle({ post }) {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{post.title}</h3>
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