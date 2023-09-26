// to reread: how tokens work. how to store and render data from API (cmon, you already know this one).
//how to send messages(i think this is a basic POST to messages API?)
//how react forms work. how to POST new user info(probably know). how to display toasts
// ternary statements
import { useState } from "react";
import FetchMeData from "./FetchMeData";
// import MessageBox from "./Messages";
// import MyPosts from "./MyPosts";
import { useEffect } from "react";

export default function Profile({ token }) {
  const [username, setUsername] = useState("");
  // fetch /me data and display username + other info.
  // fetch messages data and display
  // enable reply to messages in display. fetch messages and post to.
  return (
    <>
      <FetchMeData token={token} username={username} />
      {username && (
        <div>
          <h2> Welcome, {username} </h2>
        </div>
      )}
    </>
  );
}
