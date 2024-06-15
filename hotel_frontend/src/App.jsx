import Header from "./components/Navbar/Header.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Appp from "./components/Appp.jsx"
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route index element={
          <>
            <Header />
            <Nav/>
            <Appp/>
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
