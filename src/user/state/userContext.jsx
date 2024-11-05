
import { createContext, useEffect, useState } from "react";

// Create User Context
export const userContext = createContext(); 

// Provider component
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Move useState here

    useEffect(()=>{
        const userDetails = localStorage.getItem('user') ; 

        if(userDetails){
            setUser(userDetails)
        }
    },[]) ; 

    const userInfo = {
        user , 
        setUser
    }

    return (
        <userContext.Provider value={userInfo}> 
            {children}
        </userContext.Provider>
    );
}; 