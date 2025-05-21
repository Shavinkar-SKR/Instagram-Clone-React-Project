import React from "react";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoShareOutline, IoBookmarkOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoIosMore, IoMdHeartEmpty } from "react-icons/io";

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
    <div className="flex justify-center">
      {posts.length > 0 ? (
        <div className="flex flex-col gap-y-10">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col gap-y-1">
              <div className="flex gap-x-2 mb-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={post.user.profile_pic}
                  alt="Profile picture"
                />
                <h5>{post.user.username}</h5>
                <p className="text-gray-400"> • {post.time}</p>
              </div>

              <div>
                <img className="w-100 " src={post.image} alt="Image" />
              </div>

              <div className="flex text-2xl">
                <div className="flex gap-x-2 relative top-1">
                  <IoMdHeartEmpty />
                  <HiOutlineChatBubbleOvalLeft />
                  <IoShareOutline />
                </div>
                <div className="relative top-1 ml-73">
                  <IoBookmarkOutline />
                </div>
              </div>

              <div className="text-sm mt-1">
                <b>{post.likes} Likes</b>
              </div>

              <div>
                <b>{post.user.username}</b> {post.caption}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
}

export default Posts;
