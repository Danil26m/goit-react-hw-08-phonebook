import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { deleteComponent} from 'redux/options';
import { addTar} from 'redux/filter';
export default function Contacts({cont}) {
    const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {cont.map(m => (
          <li key={m.id}>
            <p>
              {m.name}: {m.number}
            </p>
            <button type="button" onClick={() => {
              return dispatch(deleteComponent(m.id))}}>
              delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Find firs name</h2>
      <input
        type="text"
        name="firstName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={(even)=>{
            const text = even.target.value
            dispatch(addTar(text))}}
      />
    </div>
  );
}

Contacts.propTypes = {
  cont: PropTypes.array,
};
