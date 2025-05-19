import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className=" w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[50%]">
          <Feed />
        </div>
        <div className=" w-[30%]">
          <Suggestions />
        </div>
      </div>
    </>
  );
}

export default App;
