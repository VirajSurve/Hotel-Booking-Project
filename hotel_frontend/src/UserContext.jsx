import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready,setReady]=useState(false);

    useEffect(() => {
        if (!user) {
            axios.get("http://localhost:4000/profile").then(({ data }) => {
                console.log("Profile data received:", data);
                setUser(data);
                setReady(true);
            }).catch(err => {
                console.error("Error fetching profile:", err);
            });
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}


