import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import App from "./App.tsx";
import "./main.css";
import MainPage from "./pages/MainPage";
import Places from "./pages/Places";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/places",
    element: <Places />,
  },
]);

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
