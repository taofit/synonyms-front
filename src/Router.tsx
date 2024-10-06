import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import React from "react";
import NavBar from "./components/NavBar.tsx";
import Add from "./components/Add.tsx";
import Get from "./components/Get.tsx";
import Edit from "./components/Edit.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/synonyms-front/",
    element: (
      <React.StrictMode>
        <NavBar />
        <App />
      </React.StrictMode>
    ),
  },
  {
    path: "/synonyms-front/get",
    element: (
      <div>
        <NavBar />
        <Get />
      </div>
    ),
  },
  {
    path: "/synonyms-front/add",
    element: (
      <div>
        <NavBar />
        <Add />
      </div>
    ),
  },
  {
    path: "/synonyms-front/edit",
    element: (
      <div>
        <NavBar />
        <Edit />
      </div>
    ),
  },
]);

export default BrowserRouter;
