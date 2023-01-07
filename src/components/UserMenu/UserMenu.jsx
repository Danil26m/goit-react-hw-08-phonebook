import { useDispatch, useSelector } from "react-redux"
import authOperations from "redux/auth/auth-operations";

export default function UserMenu() {
    const auth = useSelector(state => state.auth.user.name);
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(authOperations.logout());
    }
    return <div>
        <p>{auth}</p>
        <button onClick={handleClick}>Log Out</button>
    </div>
}