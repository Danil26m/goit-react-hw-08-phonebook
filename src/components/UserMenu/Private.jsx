import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Private({children}) {
    const loged = useSelector(state => state.auth.token);
    return loged ? children : <Navigate to="/register" /> 
    
}