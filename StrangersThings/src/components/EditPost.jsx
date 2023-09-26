/* NOT TESTED YET - WILL TEST AFTER DETAILEDPOST IS COMPLETE */
import { useState } from "react";
import { updatePost } from "../API";
//EditPost will use token when sending API fetch call
const EditPost = ({ token }) => {
  // these track the user input for each input field
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  //on submit, make an object using the values stored in state for title, price, etc. and pass that object as well as token to the updatePost fetch call;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = await updatePost(
        {
          title,
          description,
          price,
          location,
          willDeliver,
        },
        token
      );
      console.log(updatedPost);
      return updatedPost;
    } catch (error) {
      console.error(error, error.message);
    }
    handleSubmit(title, description, price, location, willDeliver, token);
  };

  return (
    <>
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="postWillDeliver">
          <input
            id="willDeliver"
            type="text"
            name="willDeliver"
            placeholder="Are you willing to deliver the item?"
            required
            onChange={(e) => setWillDeliver(e.target.value)}
          />
        </label>
        <button className="button" onClick={handleSubmit}>
          Edit post!
        </button>
      </form>
    </>
  );
};

export default EditPost;
