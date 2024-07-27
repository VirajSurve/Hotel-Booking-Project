import { Outlet } from "react-router-dom";
import MainPageFooter from "./Footer/MainPageFooter.jsx";
import "../index.css";

export default function Layout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
