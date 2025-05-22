import Posts from "./Posts";
import Story from "./Story";

function Feed() {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-cyan-300 h-30">
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
