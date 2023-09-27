/* will also feature details and remove posts */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostById } from "../API";
import EditPost from "./EditPost";
import { deletePost } from "../API";
import { myData } from "../API";

/* 
DetailedPosts is the component that renders a detailed version of each post when the user clicks on the details button 
On click, the user navigates to the page url 'localhost:/postId'
useParams utilized to grab that id and then use it to search all posts and filter out post that matches id

*/

// Post Details
export default function DetailedPosts() {
  //grab postId from URL
  const postId = useParams();
  //grab user token from session storage
  const token = sessionStorage.getItem("token");
  //will store the post whose id matches the url
  const [singlePost, setSinglePost] = useState([]);
  // will store any error
  const [error, setError] = useState(null);
  //will be used to navigate home
  const navigate = useNavigate();

  /*
    Basically, upon page load, fetch all posts, then filter out 
    all posts so only the post whose id matches the url remains 
    Set that post to singlePost, and later map over it to render the 
    full post
  */
  useEffect(() => {
    async function fetchingPostById(token) {
      const APIResponse = await fetchPostById(token);
      if (APIResponse.success) {
        const thisPost = APIResponse.data.posts.filter((post) => {
          return post._id === postId.id;
        });
        console.log("this post is:", thisPost);
        setSinglePost(thisPost);
        return;
      }
      setError(APIResponse.error.message);
      console.log("error!");
    }
    fetchingPostById(token);
  }, [postId]);

  // Delete post
  //   async function handleDelete() {
  //     try {
  //       const result = await deletePost(post.id);
  //       console.log(result);
  //       navigate("/");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  return (
    <div className="posts-wrapper">
      {error && (
        <p>{`Uh oh, error! Here's the full message: ${error.message}`}</p>
      )}
      {singlePost.map((post) => (
        <div id="post-container" key={post._id}>
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
              navigate("/");
            }}
          >
            Back
          </button>
          {/* 
          Not functional edit button
          <button 
            className="edit-button"
            id="edit-button"
            style={{
                margin: "0rem 1rem"
            }}
            onClick={()=> {
                return(
                    <>
                    <EditPost />
                    </>
                )
            }}
            >edit</button> 
            */}
          <button
            className="delete-button"
            id="delete-button"
            style={{
              margin: "0rem 1rem",
            }}
            onClick={async () => {
              //current hitch is that token is not the same as authorId, so i have to get my acc id first
              const id = await myData(token);
              console.log(id.data._id);
              if (post.author._id === id.data._id) {
                deletePost(token, post._id);
                console.log("Deleted!");
              } else {
                alert("You can't delete someone else's post!");
                console.log("You can't delete someone else's post!");
              }
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
