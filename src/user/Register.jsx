import { useState } from "react";
import Spacer from "../sections/home/spacer";
import "../styles/Register.css" ; 
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


function Register() {
    const [ userData , setUserData ] = useState({
        firstname : "" , username :"" , password:"" , confirmPassword : ""
    }) ; 

    async function handleSubmission(event){
        event.preventDefault() ; 

        if(userData.password !== userData.confirmPassword ){
            alert("password doesnot match ") ; 
        }

        //creating new data obj 
        const credentials = {
            firstname : userData.firstname ,
            username : userData.username , 
            password : userData.password
        }

        // async computation 
        try {
         
            const response = await axios.post('http://localhost:8080/register', credentials);
            console.log("Registration successful:", response.data.message);
            // Optionally reset form or redirect user here
        } catch (error) {
            console.log("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
        setUserData({
            firstname : "" , username :"" , password:"" , confirmPassword : ""
        }) ; 
     
    }

    

    function handleOnChange(event){
        const {name , value } = event.target ; 
        const newData = {
            ...userData }
        newData[name] = value ; 
        setUserData(newData) ; 
    }

    return (
        <>
        <Spacer height={100}/>
        <div className="registerContainer">
            <div className="innerContainer">
                <h1 className="text-3xl">
                    Create a new Account 
                </h1>
                <p>
                    Find Movies and Reviews 
                </p>
                <Spacer height={50}/>
                <div>
                    
                    <button>
                        <a href="/" style={{ color:"orange"}}>  Back to Home</a>
                    </button>
                </div>
            </div>
            <div>
                <form className="form" onSubmit={handleSubmission}>
                    <input type="text" name="firstname" value={userData.firstname} onChange={handleOnChange} required/>
                    <label htmlFor="firstName">First name </label>

                    <input type="text" name="username" value={userData.username} onChange={handleOnChange} required/>
                    <label htmlFor="userName">Username</label>

                    <input type="password" name="password" value={userData.password} onChange={handleOnChange}  required/>
                    <label htmlFor="password">Password</label>

                    <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleOnChange} />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    
                    <button type="submit"> Register </button>
                    <p>
                       <a href="/login" style={{
                        color:"orange"
                       }}>Login here</a> if you have account already.
                    </p>
                </form>
            </div>
        </div>
   
   </> 
    ) ; 

} ; 


export default Register;