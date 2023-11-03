import { useState } from "react";

import "./App.css";
import { Link, NavLink } from "../node_modules/react-router-dom/dist/index";
import "./index.css";
function App() {
  return (
    <>
      <div>Router Test</div>
      <h1 class="text-3xl font-bold underline flex">
        Hello world!
        <Link to="/video">video Page</Link>
      </h1>
    </>
  );
}

export default App;
