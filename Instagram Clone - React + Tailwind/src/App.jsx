import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-red-300">
        <div className="bg-cyan-500 w-[20%]">
          <Sidebar />
        </div>
        <div className="bg-blue-500 w-[50%]">Feed</div>
        <div className="bg-pink-300 w-[30%]">Suggestions</div>
      </div>
    </>
  );
}

export default App;
