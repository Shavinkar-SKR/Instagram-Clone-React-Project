import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

function ViewStory() {
  const [story, setStory] = useState(null);

  const { id, tot } = useParams();

  const navigate = useNavigate();

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
  }, [id]);

  if (id <= 0 || id > tot) {
    navigate("/");
  }

  return (
    <>
      {story ? (
        <div className="flex justify-center items-center">
          <Link to={`http://localhost:5173/story/${id - 1}/${tot}`}>
            <IoIosArrowDropleftCircle className="w-8 h-8" />
          </Link>
          <div>
            <img
              className="h-screen rounded-lg"
              src={story.image}
              alt="story"
            />
            <div className="">{story.user.username}</div>
          </div>

          <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tot}`}>
            <IoIosArrowDroprightCircle className="w-8 h-8" />
          </Link>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default ViewStory;
