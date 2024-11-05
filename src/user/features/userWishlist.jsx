// userListContext.js
import { createContext, useContext } from "react";
import { userContext } from "../state/userContext";
import axios from "axios";

export const userListContext = createContext();

// Provider component
export const UserListContextProvider = ({ children }) => {

    const handleWishlist =  async (user , movieId , movieOverview , movieTitle , moviePoster ) => {
      
        if (!user) {
            alert('You need to log in first');
            return; // Exit early if user is not logged in
        }

        // request the server to post the data 
        // send tthe movie id 
        const response = await axios.post('http://localhost:8080/saveMovie' ,{ 
           user ,  movieId  , movieOverview , movieTitle , moviePoster
        }) ; 
        if(response.status === 200 ){
            alert("movie has been saved ");
        }
        if(response.status === 201){
            alert("movie is already on your wishlist ")
        }
    };

    return (
        <userListContext.Provider value={{ handleWishlist }}>
            {children}
        </userListContext.Provider>
    );
};