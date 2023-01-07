import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import AppContacts from './AppContact';
import Login from './Login/Login';
import Register from './Register/Register';
import Private from './UserMenu/Private';
import Public from './UserMenu/Public';
import UserMenu from './UserMenu/UserMenu';

export default function App() {
  const dispatch = useDispatch();
  const loged = useSelector(state => state.auth.token);
  useEffect(() => {
    dispatch(authOperations.current());
  }, [dispatch]);
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
      </Routes>
    </>
  );
}
