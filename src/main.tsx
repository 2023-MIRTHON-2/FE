import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import "./main.css";
import MainPage from "./pages/main/MainPage";
import PlaceListPage from "./pages/place/PlaceListPage";
import Layout from "./components/Layout";
import "./styles/global.css";
import PlaceDetailPage from "./pages/place/PlaceDetailPage";
import CreateBookingPage from "./pages/booking/CreateBookingPage";

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
        path: "/place/list",
        element: <PlaceListPage />,
      },
      {
        path: "/place/:id",
        element: <PlaceDetailPage />,
      },
      {
        path: "/booking/:bookingId/create",
        element: <CreateBookingPage />,
      },
    ],
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);
