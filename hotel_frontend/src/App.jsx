import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LoginPage from "./components/Pages/LoginPage.jsx";
import IndexPage from "./components/Pages/IndexPage.jsx";
import AccountPage from "./components/Pages/ProfilePage.jsx";
import PlacesPage from "./components/Pages/PlacesPage.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import axios from "axios";
import ProfilePage from "./components/Pages/ProfilePage.jsx";
import PlacesFormPage from "./components/Pages/PlacesFormPage.jsx";
import PlacePage from "./components/Pages/PlacePage.jsx";

axios.defaults.withCredentials = true;
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<LoginPage />} />
          <Route path="account/:subpage?" element={<ProfilePage />} />
          <Route path="account/places" element={<PlacesPage />} />
          {/* <Route path="third" element={<ThirdPage />} /> */}
          <Route path="account/places/new" element={<PlacesFormPage />} />
          <Route path="account/places/:id" element={<PlacesFormPage />} />
          <Route path="place/:id" element={<PlacePage />} />
          <Route path="account/bookings" element={<BookingsPage/>} />
          <Route path="account/bookings/:id" element={<BookingPage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
