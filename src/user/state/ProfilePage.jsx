import { useContext, useEffect, useState } from "react";
import { userContext } from "./userContext";
import { Navigate } from "react-router-dom";
import "../../styles/Profile.css";
import Spacer from "../../sections/home/spacer";
import axios from "axios";
import Card from "../../components/Card";
import Wishlist from "../../components/WishlistCard";

function ProfilePage() {
    const { user, setUser } = useContext(userContext);
    const [movieList, setMovieList] = useState([]);


    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');


        setUser(null);
        alert("logged out")
        return <Navigate to="/login" />
    };

    // making sure it will fetch the user's wishlist whenever site reloads 
    useEffect(() => {
        try {
            async function fetchMovies() {
                const response = await axios.get('http://localhost:8080/getMovies', {
                    headers: {
                        user
                    }
                });
                console.log(response);
                setMovieList(response.data.movieList);
                console.log(movieList);
            }
            fetchMovies();

        } catch (error) {
            console.log(error, " some thing is wrong ");
        }


    }, []);


    return (

        <div className="profilePage">
            <Spacer height={30} />
            <div className="profileContainer">
                <div className="userInfo">
                    Logged In : {user}
                </div>
                <button onClick={handleLogout}>Log out </button>
            </div>

            <h1 className="text-xl">
                    Your WishLists
                </h1>
            <div className="userWishlistContainer">
        
        
                    {movieList ? movieList?.map((movie) => {
                        return (
                            <div key={movie._id}>
                                <Wishlist movie={movie} />
                            </div>
                        )
                    }) : "no data avialable"}
           

            </div>


        </div>
    );
}

export default ProfilePage;