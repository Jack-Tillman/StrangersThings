/* will also feature details and remove posts */
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { fetchSinglePost } from "../API"

// Post Details
export default function singlePost() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getSinglePost() {
      const APIResponse = await fetchSinglePost(id);
      if (APIResponse.success) {
        setPost(APIResponse.data.post);
      } else {
        setError(error.message);
      }
    }
    getSinglePost();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {post && <DetailedPosts post={post} />}
    </div>
  );
}