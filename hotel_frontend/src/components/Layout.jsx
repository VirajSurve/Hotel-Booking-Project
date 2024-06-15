import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header.jsx";
import Footer from "./Footer.jsx";
import "../index.css";

export default function Layout(){
    return(
        <>
        <div className="p-4">
        <Header />
        <Outlet />
        <Footer />
        </div>
        
        </>
    );
}