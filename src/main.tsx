import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import "./main.css";
import MainPage from "./pages/main/MainPage";
import Places from "./pages/Places";
import PlaceListPage from "./pages/place/PlaceListPage";
import Layout from "./components/Layout";
import "./styles/global.css";
import PlaceDetailPage from "./pages/place/PlaceDetailPage";
import LoginPage from "./pages/login/LoginPage";
import JoinPage from "./pages/join/JoinPage";
import JoinCeoPage from "./pages/join/JoinCeoPage";
import JoinUserPage from "./pages/join/JoinUserPage";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find root element");

const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/places",
        element: <Places />,
      },
      {
        path: "/place/list",
        element: <PlaceListPage />,
      },
      {
        path: "/place/:id",
        element: <PlaceDetailPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/join",
        element: <JoinPage />,
      },
      {
        path: "/join/ceo/",
        elment: <JoinCeoPage />,
      },
      {
        path: "/join/user",
        element: <JoinUserPage />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);
