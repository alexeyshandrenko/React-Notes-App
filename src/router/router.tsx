import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import HomeTable from "../pages/Table/HomeTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/table",
    element: <HomeTable />,
  },
]);
