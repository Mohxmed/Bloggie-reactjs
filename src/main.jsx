import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";
import "@styles/global.css";

// React-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Routes
const router = createBrowserRouter(
  createRoutesFromElements([<Route path="/" element={<App />} />])
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
