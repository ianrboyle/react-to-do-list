import React from "react";
import Heading from "./Heading";

function App() {
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input type="text" />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
