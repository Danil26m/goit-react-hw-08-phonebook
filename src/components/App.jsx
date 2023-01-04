import { Link, Route, Routes } from "react-router-dom";
import AppContacts from "./AppContact";
import Register from "./Register/Register";

export default function App() {
    
    return <> 
    <Link to='/register'>register</Link>
    <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contacts" element={<AppContacts/>}/>
    </Routes>
    </>
   
}