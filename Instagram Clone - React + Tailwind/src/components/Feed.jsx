import Posts from "./Posts";
import Story from "./Story";

function Feed() {
  return (
    <>
      <div className="flex flex-col">
        <div className="h-30 mb-6">
          <Story />
        </div>
        <div>
          <Posts />
        </div>
      </div>
    </>
  );
}

export default Feed;
