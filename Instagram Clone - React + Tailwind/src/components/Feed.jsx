import Posts from "./Posts";
import Story from "./Story";

function Feed() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-cyan-500 h-40">
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
