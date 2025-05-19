import React from "react";

import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>Posts</div>
    </>
  );
}

export default Posts;
