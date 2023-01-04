import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import { useSelector } from 'react-redux';
export default function AppContacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const filtered = () => {
    if (filter) {
      return contacts.filter(m =>
        m.name.toLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
    return contacts;
  };
  const f = filtered();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form items={contacts} />

      <h2>Contacts</h2>
      {contacts?.length ? <Contacts cont={f} /> : ''}
    </div>
  );
}
