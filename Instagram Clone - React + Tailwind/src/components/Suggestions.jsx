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

    fetch("http://localhost:3000/suggestions")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setSuggestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {profile ? (
        <>
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

          <div className="flex justify-evenly mt-5">
            <p>Suggested for you</p>
            <b>
              <p className="text-sm">See all</p>
            </b>
          </div>

          <div>
            {suggestions.length > 0 ? (
              <div>
                {suggestions.map((suggest) => (
                  <div key={suggest.id}>{suggest.id}</div>
                ))}
              </div>
            ) : (
              <div>Loading Suggestions</div>
            )}
          </div>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Suggestions;
