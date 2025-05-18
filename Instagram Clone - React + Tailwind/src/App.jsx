import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className=" w-[20%]">
          <Sidebar />
        </div>
        <div className="bg-cyan-500 w-[50%]">Feed</div>
        <div className=" w-[30%]">Suggestions</div>
      </div>
    </>
  );
}

export default App;
