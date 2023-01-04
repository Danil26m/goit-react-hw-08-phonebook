import { Link, Route, Routes } from "react-router-dom";
import AppContacts from "./AppContact";
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function App() {
    
    return <> 
    <Link to='/register'>register</Link>
    <Link to='/login'>login</Link>
    <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contacts" element={<AppContacts/>}/>
    </Routes>
    </>
   
}