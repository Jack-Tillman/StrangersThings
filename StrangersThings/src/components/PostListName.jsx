/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import MessageForm from "./MessageForm";

const PostListName = ({ post, token }) => {
  const navigate = useNavigate();
  const storageToken = sessionStorage.getItem("token");
  return (
    <div id="post-container" key={post._id}>
      <h2 className="post-h2">{post.title}</h2>
      <h3 className="post-h3">{post.author.username}</h3>
      <p className="post-description">{post.description}</p>
      <p className="post-price">{post.price}</p>
      <p className="post-createdAt">{post.createdAt}</p>
      <p className="post-updatedAt">{post.updatedAt}</p>
      <p className="post-location">{post.location}</p>
      <p className="post-willDeliver">{post.willDeliver}</p>
      {storageToken && (
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
      )}
      {(storageToken) ? <MessageForm POST_ID={post._id} /> : null
      }
    </div>
  );
};

export default PostListName;
