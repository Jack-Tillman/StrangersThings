import { useState } from "react";

export default function MessageForm(POST_ID) {
  const COHORT_NAME = "2306-ftb-et-web-am";
  const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    try {
      console.log(token);
      console.log(message);
      const postId = Object.values(POST_ID);
      console.log(postId);
      const response = await fetch(`${API_URL}/posts/${postId}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: message,
          },
        }),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Send a Message:{" "}
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
