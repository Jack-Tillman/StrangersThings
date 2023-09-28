import { useState } from "react";
import { makePost } from "../API/index";

const CreatePost = ({ token }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handlePost = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    try {
        const postObject = {
            title: title,
            price: price,  
            description: description, 
            location: location,
            willDeliver: willDeliver
        }
      const newPost = await makePost(postObject, token);
      console.log(newPost);
      return newPost;
    } catch (error) {
      console.error(error, error.message);
    }
  };
  return (
    <form className="styleForm">
      <label htmlFor="postTitle">
        <input
          id="title"
          type="text"
          name="title"
          placeholder="title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="postPrice">
        <input
          id="price"
          type="number"
          name="price"
          placeholder="Price"
          required
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label htmlFor="postDescription">
        <input
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="postLocation">
        <input
          id="location"
          type="text"
          name="location"
          placeholder="Location"
          required
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <label htmlFor="postWillDeliver">Will deliver?
        <input
          id="willDeliver"
          type="checkbox"
          name="willDeliver"
          placeholder="Will you deliver this item?"
          required
          onChange={(e) => setWillDeliver(!willDeliver)}
        />
      </label>
      <button className="button" onClick={handlePost}>
        Create New Post!
      </button>
    </form>
  );
};

export default CreatePost;
