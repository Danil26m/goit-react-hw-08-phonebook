
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

export default function Login() {
    const dispatch = useDispatch();
  const handelSubmit =(even)=>{
          even.preventDefault();
          const email = even.target.elements.email.value;
          const password = even.target.elements.password.value;
          dispatch(authOperations.login({email,password}));
          even.target.reset();
  }
    return (
      <div>
        <form id='form' action="" onSubmit={handelSubmit}>
        
          <h2>Email</h2>
          <input
            type="email"
            name="email"
            required
          />
          <h2>Password</h2>
          <input
            type='password'
            name="password"
            required
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
}