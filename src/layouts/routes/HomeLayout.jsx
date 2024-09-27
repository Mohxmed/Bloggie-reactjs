import { Outlet } from "react-router-dom";
import Header from "@components/ui/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function HomeLayout() {
  return (
    <>
      <ToastContainer position="bottom-left" />
      <Header />
      <Outlet />
    </>
  );
}
