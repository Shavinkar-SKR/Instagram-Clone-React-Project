import { useState, useEffect } from "react";

function Story() {
  const [stories, setStories] = useState([]);

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
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className="ml-4 mt-5">
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
