/* This will feature the delete post function */
import { useNavigate } from "react-router-dom";
import { deletePost } from "../API"

export default function deletePost({ post }) {
    const navigate = useNavigate();
  
    async function handleDelete() {
      try {
        const result = await deletePost(post.id);
        console.log(result);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
      return (
        <div>
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      );
    }

    export default;