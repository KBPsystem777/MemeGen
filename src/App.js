import React from "react";
import Generator from "./components/Generator";

function App() {
  return (
    <div className="container-fluid app">
      <h1 className="text-center">RandomMeme</h1>
      <div>
        <Generator />
      </div>
    </div>
  );
}

export default App;
