// to reread: how tokens work. how to store and render data from API (cmon, you already know this one).
//how to send messages(i think this is a basic POST to messages API?)
//how react forms work. how to POST new user info(probably know). how to display toasts
// ternary statements
import { useState } from "react";
import { useEffect } from "react";
import MessageBox from "./Messages";
import MyPosts from "./MyPosts";
import CreatePost from "./CreatePost";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("user");
  const [error, setError] = useState(null);

  // fetch /me data and display username + other info.
  // fetch messages data and display
  // enable reply to messages in display. fetch messages and post to.

  useEffect(() => {
    async function FetchMeData() {
      const token = sessionStorage.getItem("token");
      try {
        const response = await fetch(
          `https://strangers-things.herokuapp.com/api/2306-ftb-et-web-am/users/me`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
        setUserData(result);
      } catch (err) {
        console.error(err);
      }
    }
    FetchMeData();
  }, []);
  //   console.log(userData);
  useEffect(() => {
    userData && setUsername(userData.data.username);
  });
  return (
    <>
      <div>
        {" "}
        <h2> Welcome, {username}</h2>
        <MyPosts />
        <MessageBox />
        <CreatePost />
      </div>
    </>
  );
}
