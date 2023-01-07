import { useDispatch, useSelector } from "react-redux"
import authOperations from "redux/auth/auth-operations";
import './User.css';

export default function UserMenu(prop) {
    const auth = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(authOperations.logout());
    }
    return <div className="user">
        <p>User <span className="text-auth">{auth}</span></p>
        <button className="button" onClick={handleClick}>Log Out</button>
    </div>
}