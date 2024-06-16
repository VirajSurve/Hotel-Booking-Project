import { Outlet } from "react-router-dom";
import Header from "./Navbar/Header.jsx";
import Footer from "./Footer.jsx";
import "../index.css";

export default function Layout(){
    return(
        <>
        <div className="relative p-4 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
        </div>
        
        </>
    );
}