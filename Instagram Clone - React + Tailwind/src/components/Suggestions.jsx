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
        <div className="">
          <div className="flex mt-6 justify-between ml-15 mr-15">
            <div className="flex">
              <img
                className="rounded-full h-13 w-13"
                src={profile.profile_pic}
                alt="Profile picture"
              />
              <div className="ml-3 mt-2">
                <b>{profile.username}</b>
              </div>
            </div>
            <div className="flex items-center text-cyan-500">
              <p>Switch</p>
            </div>
          </div>

          <div className="flex justify-between ml-15 mr-15 mt-4">
            <p>Suggested for you</p>
            <b>
              <p className="text-sm">See all</p>
            </b>
          </div>

          <div>
            {suggestions.length > 0 ? (
              <div>
                {suggestions.map((suggest) => (
                  <div key={suggest.id}>
                    <div className="flex justify-between ml-15 mr-15 mt-2">
                      <div className="flex w-45">
                        <img
                          className="rounded-full w-13 h-13"
                          src={suggest.profile_pic}
                          alt="Profile_picture"
                        />
                        <div className="ml-3 mt-2">
                          <p>
                            <b>{suggest.username}</b>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center text-cyan-500">
                        Follow
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading Suggestions</div>
            )}
            <div className="ml-15 mr-15 mt-8">
              <p className="text-gray-400 text-xs">
                About . Help . Press . API . Privacy . Terms . Locations .
                Language . Meta Verified
              </p>

              <div className="text-gray-400 mt-5">
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
