import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

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

        //for second page icons
        const [icon1 , setIcon1] = useState([]);
        const [icon2 , setIcon2] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, icon1 , setIcon1 , icon2 , setIcon2}}>
            {children}
        </UserContext.Provider>
    );
}



