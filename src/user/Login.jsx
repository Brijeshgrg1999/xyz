import { useContext, useState } from "react";
import Spacer from "../sections/home/spacer";
import "../styles/Register.css";
import axios from "axios";
import { userContext } from "./state/userContext";
import { Navigate } from "react-router-dom";


function Login() {

    let token;
    const { setUser } = useContext(userContext);
    const [navigate, setNavigate] = useState(false);

    const [userData, setUserData] = useState({
        username: "", password: ""
    })

    function handleOnchange(event) {
        const { name, value } = event.target;
        const newData = {
            ...userData
        };
        newData[name] = value;
        setUserData(newData);

    }

    function handleNavigation() {
        setNavigate(true);
    }

    async function handleLogin(event) {
        event.preventDefault();

        // get the user data in an object 
        const userCredentials = {
            username: userData.username,
            password: userData.password
        }

        // use axios for post 
        try {
            const response = await axios.post('http://localhost:8080/login', userCredentials);
            const token = response.data.token;

            localStorage.setItem('token', token);
            localStorage.setItem('user', userCredentials.username);
            setUser(userCredentials.username);

            if (token) {
                handleNavigation(true);
            }

        } catch (error) {

        }



    }

    if (navigate) return <Navigate to="/profile" />

    return (
        <>
            <Spacer height={100} />
            <div className="registerContainer">
                <div className="innerContainer">

                    <h1 className="text-3xl">
                        Log in to
                    </h1>
                    <p>
                        Your account. {token}
                    </p>
                    <Spacer height={50} />
                    <div>
                        <p>
                            <a href="/#" style={{
                                color: "orange"
                            }}>Sign up here</a> if you dont have account already.
                        </p>
                        <button>
                            <a href="/"> Back to Home</a>

                        </button>
                    </div>
                </div>
                <div>
                    <form className="form" onSubmit={handleLogin}>

                        <label htmlFor="userName">Username</label>
                        <input type="text" name="username" value={userData.username} onChange={handleOnchange} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={userData.password} onChange={handleOnchange} required />


                        <button type="submit"> Log In </button>

                    </form>
                </div>
            </div>

        </>
    );

};


export default Login;