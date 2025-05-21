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
        <div className=" ml-6 w-70 fixed">
          <div className="flex mt-8 justify-between ml-auto">
            <div className="flex">
              <img
                className="rounded-full h-11 w-11"
                src={profile.profile_pic}
                alt="Profile picture"
              />
              <div className="ml-3 mt-2">
                <b>{profile.username}</b>
              </div>
            </div>
            <div className="flex items-center text-cyan-500 text-xs">
              <p>Switch</p>
            </div>
          </div>

          <div className="flex justify-between ml-auto mt-4 text-sm">
            <b>
              <p className="text-gray-500">Suggested for you</p>
            </b>
            <b>
              <p>See all</p>
            </b>
          </div>

          <div>
            {suggestions.length > 0 ? (
              <div>
                {suggestions.map((suggest) => (
                  <div key={suggest.id}>
                    <div className="flex justify-between ml-auto mt-2">
                      <div className="flex w-45">
                        <img
                          className="rounded-full w-11 h-11"
                          src={suggest.profile_pic}
                          alt="Profile_picture"
                        />
                        <div className="ml-3 mt-2">
                          <p>
                            <b>{suggest.username}</b>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-cyan-500 text-xs">
                        Follow
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading Suggestions</div>
            )}
            <div className="ml-auto mt-8">
              <p className="text-gray-400 text-xs">
                About . Help . Press . API . Jobs . Privacy . Terms . Locations
                . Language . Meta Verified
              </p>

              <div className="text-gray-400 mt-5 text-xs">
                &copy; 2025 INSTAGRAM FROM META
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Suggestions;
