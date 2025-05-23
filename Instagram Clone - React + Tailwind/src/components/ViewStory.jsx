import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewStory() {
  const [story, setStory] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/stories/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setStory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {story ? (
        <div className="flex justify-center">
          <img className="h-screen rounded-lg" src={story.image} alt="story" />
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default ViewStory;
