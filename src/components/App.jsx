import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import authOperations from "redux/auth/auth-operations";
import AppContacts from "./AppContact";
import Login from "./Login/Login";
import Register from "./Register/Register";
import UserMenu from "./UserMenu/UserMenu";

export default function App() {
    const dispatch = useDispatch();
    const loged = useSelector(state => state.auth.token);
    useEffect(()=>{dispatch(authOperations.current())},[dispatch]);
    return <> 
    {loged?<Link to='/contacts'>Contacts</Link>:<><Link to='/register'>register</Link>
    <Link to='/login'>login</Link></>}
    <UserMenu/>
    <Routes>
        <Route path="/" element={<div>Home</div>}/>
       {loged?<Route path="/contacts" element={<AppContacts/>}/>:<>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        </>} 
    </Routes>

    </>
   
}