import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LoginPage from "./components/Pages/LoginPage.jsx";
import IndexPage from "./components/Pages/IndexPage.jsx";
import PlacesPage from "./components/Pages/PlacesPage.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import axios from "axios";
import ProfilePage from "./components/Pages/ProfilePage.jsx";
import PlacesFormPage from "./components/Pages/PlacesFormPage.jsx";
import PlacePage from "./components/Pages/PlacePage.jsx";
import WishlistPage from "./components/WishlistPage.jsx";
import { WishlistProvider } from "./WishlistContext.jsx";
import BookingsPage from "./components/Pages/PlacePage Components/BookingsPage.jsx";
import BookingPage from "./components/Pages/PlacePage Components/BookingPage.jsx";


axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/:category" element={<IndexPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<LoginPage />} />
            <Route path="account/:subpage?" element={<ProfilePage />} />
            <Route path="account/places" element={<PlacesPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="account/places/new" element={<PlacesFormPage />} />
            <Route path="account/places/:id" element={<PlacesFormPage />} />
            <Route path="place/:id" element={<PlacePage />} />
            <Route path="account/bookings" element={<BookingsPage/>} />
            <Route path="account/bookings/:id" element={<BookingPage/>} />
          </Route>
        </Routes>
      </WishlistProvider>
    </UserContextProvider>
  );
}

export default App;
