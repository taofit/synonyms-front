import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import React from "react";
import NavBar from "./components/NavBar.tsx";
import Add from "./components/Add.tsx";
import Get from "./components/Get.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <NavBar />
        <App />
      </React.StrictMode>
    ),
  },
  {
    path: "get",
    element: (
      <div>
        <NavBar />
        <Get />
      </div>
    ),
  },
  {
    path: "add",
    element: (
      <div>
        <NavBar />
        <Add />
      </div>
    ),
  },
  {
    path: "edit",
    element: (
      <div>
        <NavBar />
        <h1>Edit Page</h1>
      </div>
    ),
  },
]);

export default BrowserRouter;
