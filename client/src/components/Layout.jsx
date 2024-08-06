import { Outlet } from "react-router-dom";
import MainPageFooter from "./Footer/MainPageFooter.jsx";
import "../index.css";

export default function Layout() {
  return (
    <>
      {/* <div className="relative p-2.5 sm:p-2 min-h-screen "> */}
      <Outlet />
      <MainPageFooter />
      {/* </div> */}
    </>
  );
}
