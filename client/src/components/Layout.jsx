import { Outlet } from "react-router-dom";
import MainPageFooter from "./Footer/MainPageFooter";
import "../index.css";

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Outlet />
        <MainPageFooter />
      </div>
    </>
  );
}
