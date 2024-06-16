import Header from "./components/Navbar/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Appp from "./components/Appp.jsx"
import { Route,Routes, useParams } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage.jsx";
import IndexPage from "./components/Pages/IndexPage.jsx";
import Layout from "./components/Layout.jsx";
import AccountPage from "./components/Pages/AccountPage.jsx";

function App() {

  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
