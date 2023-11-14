import React from "react";

import { filesAndFolders } from "./data";

import { Search } from "./components/search";

function App() {
  return (
    <div className="w-full bg-white p-4 space-y-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-500">
        File Directory
      </h1>

      <Search filesAndFolders={filesAndFolders} />
    </div>
  );
}

export default App;
