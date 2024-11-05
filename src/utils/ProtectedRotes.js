import { useContext } from "react";
import { userContext } from "../user/state/userContext";
import { Navigate } from "react-router-dom";


function ProtectedRoutes({element}) {
    const {user} = useContext(userContext) ; 

    if(!user){
        return <Navigate to="/login" /> ; 
    }
    return element;
}

export default ProtectedRoutes;