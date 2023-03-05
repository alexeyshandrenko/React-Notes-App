import { useEffect } from "react";

import { createCollectionsInIndexedDB } from "./db/indexeddb";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  useEffect(() => {
    createCollectionsInIndexedDB();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
