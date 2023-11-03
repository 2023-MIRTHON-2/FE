import { useState } from "react";

import "./App.css";
import { Link, NavLink } from "../node_modules/react-router-dom/dist/index";

function App() {
  return (
    <>
      <div>Router Test</div>
      <Link to="/video">video Page</Link>
    </>
  );
}

export default App;
