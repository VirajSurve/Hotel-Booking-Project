import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    const [icon1, setIcon1] = useState([]);
    const [icon2, setIcon2] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuests] = useState(1);  // Set initial guests to 1 for better UX

    useEffect(() => {
        if (!user) {
            axios.get("http://localhost:4000/profile")
                .then(({ data }) => {
                    console.log("Profile data received:", data);
                    setUser(data);
                    setReady(true);
                })
                .catch(err => {
                    console.error("Error fetching profile:", err);
                });
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, icon1, setIcon1, icon2, setIcon2, startDate, setStartDate, endDate, setEndDate, guests, setGuests }}>
            {children}
        </UserContext.Provider>
    );
}
