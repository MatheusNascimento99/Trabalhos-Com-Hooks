import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Usememo from "../src/view/Usememo";
import Useeffect from "../src/view/Useeffect";
import Usestate from "../src/view/Usestate";
import Inicio from "../src/view/Inicio";
import Usereducer from "./view/UseReducer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/Usestate",
    element: <Usestate />,
  },
  {
    path: "/Useeffect",
    element: <Useeffect />,
  },
  {
    path: "/Usereducer",
    element: <Usereducer />,
  },
  {
    path: "/Usememo",
    element: <Usememo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
