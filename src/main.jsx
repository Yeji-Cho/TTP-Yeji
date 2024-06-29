import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Checklist from './Pages/Checklist/Checklist.jsx'
import Edit, {
  loader as indexLoader,
}from './Pages/Edit/Edit.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/checklist",
    element: <Checklist/>,
  },
  {
    path: "/edit/:index",
    element: <Edit/>,
    loader: indexLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);