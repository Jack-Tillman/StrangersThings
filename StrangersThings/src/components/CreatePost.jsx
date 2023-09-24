import { useState } from 'react'
import { makePost } from '../API/index'

const CreatePost = ({ token }) => {
const [title, setTitle] = useState("");
const [price, setPrice] = useState(null);
const [description, setDescription] = useState("")

const handlePost = async (e) => {
    e.preventDefault(); 
    try {
        const newPost = await makePost(title, price, description);
        console.log(newPost);
        return newPost;
  } catch (error) {
    console.error(error, error.message);
  } 
}
        return (
            <form className="styleForm">
                <label htmlFor='postTitle'>
                    <input id="title"
                        type="text"
                        name="title"
                        placeholder="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor='postPrice'>
                    <input id="price"
                        type="number"
                        name="price"
                        placeholder="Price"
                        required
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
                <label htmlFor='postDescription'>
                    <input id="description"
                        type="text"
                        name="description"
                        placeholder="Description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button className="button" onClick={handlePost}>Create New Post!</button>
            </form>
        )}
    
    
export default CreatePost;