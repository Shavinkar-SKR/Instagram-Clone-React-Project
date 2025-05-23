import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Story() {
  const [stories, setStories] = useState([]);

  const navigate = useNavigate();

  let tot = 0;

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setStories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex ml-[45px]">
      <div className="hidden">{(tot = stories.length)}</div>
      {stories.length > 0 ? (
        stories.map((story) => (
          <div
            key={story.id}
            className="ml-4 mt-5"
            onClick={() => {
              navigate(`/story/${story.id}/${tot}`);
            }}
          >
            <div className="gradient-border">
              <div className="inner-border">
                <img
                  className="rounded-full dp"
                  src={story.user.profile_pic}
                  alt="Profile pic"
                />
              </div>
            </div>
            <p className="truncate w-[71px]">{story.user.username}</p>
          </div>
        ))
      ) : (
        <>Loading</>
      )}
    </div>
  );
}

export default Story;
