import { useState, useEffect } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="">
      {profile ? (
        <div className="flex mt-9 justify-evenly">
          <div className="flex">
            <img
              className="rounded-full h-15 w-15"
              src={profile.profile_pic}
              alt="Profile picture"
            />
            <div className="ml-2">{profile.username}</div>
          </div>
          <div className="flex items-center text-cyan-500">
            <p>Switch</p>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Suggestions;
