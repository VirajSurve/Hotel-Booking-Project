import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import MainPageFooter from "./Footer/MainPageFooter.jsx";
import "../index.css";

export default function Layout() {
  return (
    <>
      <div className="relative p-4 min-h-screen">
        {/* <Header /> */}
        <Outlet />
        <MainPageFooter />
      </div>
    </>
  );
}
