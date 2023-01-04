import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState();
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
        case 'password':
          setPasword(value);
          break;
  
        default:
          break;
      }
    };  
  
    const handelClick =()=>{
      setName('');
      setEmail('');
      setPasword('');
  }
  const handelSubmit =(even)=>{
          even.preventDefault();
          
          dispatch(authOperations.register({name,email,password}));
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
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          <h2>Password</h2>
          <input
            type='password'
            name="password"
            value={password}
            onChange={handelInput}
            required
          />
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
}