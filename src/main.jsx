import { createRoot } from "react-dom/client";
import "@styles/global.css";

// React-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Layouts
import HomeLayout from "@layouts/routes/HomeLayout";

// Pages
import Home from "@pages/home";
import Login from "@pages/Login";
import Register from "./pages/Register";
import Profile from "@components/ui/profile/Profile";

// Routes
const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<HomeLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Route>,
  ])
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
