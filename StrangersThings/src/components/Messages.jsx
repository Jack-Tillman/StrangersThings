import { useState, useEffect } from "react";
import MessageList from "./MessageList";
export default function MessageBox() {
  const [userData, setUserData] = useState(null);
  const [myMessages, setMyMessages] = useState([]);

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
  useEffect(() => {
    userData && setMyMessages(userData.data.messages);
  });

  console.log(myMessages);
  return (
    <div>
      {myMessages && (
        <div id="all-post-containter">
          {" "}
          {/* {myMessages.map((post) => {
            return <MessageList key={post._id} post={post} />;
          })} */}
        </div>
      )}
    </div>
  );
}
