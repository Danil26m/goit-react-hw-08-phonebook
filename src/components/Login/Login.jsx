import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const handelInput = even => {
      const { name, value } = even.currentTarget;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'email':
            setEmail(value);
          break;
  
        default:
          break;
      }
    };  
  
    const handelClick =()=>{
      setName('');
      setEmail('');
   
  }
  const handelSubmit =(even)=>{
          even.preventDefault();
          
          dispatch(authOperations.login({name,email}));
          handelClick();
        
  }
    return (
      <div>
        <form id='form' action="" onSubmit={handelSubmit}>
        
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handelInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
          <h2>Number</h2>
          <input
            type='email'
            name="email"
            value={email}
            onChange={handelInput}
            required
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
}