import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import React from "react";
import NavBar from "./components/NavBar.tsx";
import Add from "./components/Add.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <NavBar title="synonym tool" />
        <App />
      </React.StrictMode>
    ),
  },
  {
    path: "search",
    element: (
      <div>
        <NavBar title="synonym tool" />
        <h1>Search Page</h1>
      </div>
    ),
  },
  {
    path: "add",
    element: (
      <div>
        <NavBar title="synonym tool" />
        <Add />
      </div>
    ),
  },
  {
    path: "edit",
    element: (
      <div>
        <NavBar title="synonym tool" />
        <h1>Edit Page</h1>
      </div>
    ),
  },
]);

export default BrowserRouter;
