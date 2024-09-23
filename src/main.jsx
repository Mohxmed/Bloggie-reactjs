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

// Layouts
import HomeLayout from "@layouts/HomeLayout.jsx";

// Pages
import Home from "@pages/home";

// Routes
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<HomeLayout />}>
      <Route path="/" element={<Home />} />
    </Route>,
  ])
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
