import { useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AppContacts from './AppContact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Private from './Private/Private';
import Public from './Public/Public';
import UserMenu from './UserMenu/UserMenu';

export default function App() {
  const loged = useSelector(state => state.auth.token);
  return (
    <>
    <header>
         {loged ? 
         <div style={{
            display: "flex",
            justifyContent:'space-between',
            alignItems:'center'
            
         }}>
            <Link to="/contacts">Contacts</Link>
            <UserMenu />
         </div>
        
       : 
        <div style={{
            display: "flex",
            gap:'20px',
            justifyContent:'center',
            alignItems:'center'
            
         }}>
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </div>
      }
      
    </header>
      
      <Routes>
       <Route path="/contacts" element={
        <Private>
           <AppContacts />
        </Private>
       }/>

            <Route path="/register" element={
                <Public>
                    <Register />
                </Public>
            
            } />
            <Route path="/login" element={
                <Public>
                    <Login />
                </Public>
            
            } />
            <Route path='*' element={<Navigate to={loged?'/contacts':'/login'} />}/>
      </Routes>
    </>
  );
}
