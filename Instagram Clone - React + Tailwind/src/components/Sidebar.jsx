import { BiHome, BiSearch, BiCompass, BiHeart } from "react-icons/bi";
import { BsPlayBtn, BsThreads } from "react-icons/bs";
import { LuMessageCircleMore, LuCircleUserRound } from "react-icons/lu";
import { FaRegSquarePlus } from "react-icons/fa6";
import { TbMenu2 } from "react-icons/tb";

function Sidebar() {
  return (
    <div className="m-6">
      <div className="flex flex-col gap-y-3">
        <img
          src="src/assets/Instagram_logo.svg.png"
          alt="insta text logo"
          className="w-24"
        ></img>
        <div className="flex items-center space-x-2">
          <BiHome />
          <span>Home</span>
        </div>

        <div className="flex items-center space-x-2">
          <BiSearch />
          <span>Search</span>
        </div>
        <div className="flex items-center space-x-2">
          <BiCompass />
          <span>Explore</span>
        </div>

        <div className="flex items-center space-x-2">
          <BsPlayBtn />
          <span>Reels</span>
        </div>

        <div className="flex items-center space-x-2">
          <LuMessageCircleMore />
          <span>Messages</span>
        </div>

        <div className="flex items-center space-x-2">
          <BiHeart />
          <span>Notifications</span>
        </div>

        <div className="flex items-center space-x-2">
          <FaRegSquarePlus />
          <span>Create</span>
        </div>

        <div className="flex items-center space-x-2">
          <LuCircleUserRound />
          <span>Profile</span>
        </div>
      </div>

      <div className="fixed bottom-7 flex flex-col gap-y-3">
        <div className="flex items-center space-x-2">
          <BsThreads />
          <span>Threads</span>
        </div>
        <div className="flex items-center space-x-2">
          <TbMenu2 />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
