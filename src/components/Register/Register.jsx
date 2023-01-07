
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";

export default function Register() {

  const dispatch = useDispatch();

  const handelSubmit =(even)=>{
          even.preventDefault();
           const name = even.target.elements.name.value;
           const email = even.target.elements.email.value;
           const password = even.target.elements.password.value;
          dispatch(authOperations.register({name,email,password}));
          even.target.reset();
  }
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}>
        <form id='form' action="" onSubmit={handelSubmit}>
        
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h2>Email</h2>
          <input
            type='email'
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