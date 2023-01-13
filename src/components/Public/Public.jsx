import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Public({children}) {
    const loged = useSelector(state => state.auth.token);
    
    return loged ? <Navigate to="/contacts"/> : children  
    
}