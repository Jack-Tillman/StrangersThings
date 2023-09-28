import { useState, useEffect } from "react";
import PostListName from "./PostListName";
export default function MyPosts() {
  const [userData, setUserData] = useState(null);
  const [postList, setPostList] = useState([]);

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
    userData && setPostList(userData.data.posts);
  });

  //   console.log(postList);
  return (
    <div>
      {postList && (
        <div id="all-post-containter">
          {" "}
          {postList.map((post) => {
            return <PostListName key={post._id} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}
