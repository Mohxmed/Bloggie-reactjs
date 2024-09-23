import { Outlet } from "react-router-dom";
import Header from "../components/ui/header/Header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
