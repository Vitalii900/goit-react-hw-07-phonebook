import '../ContactList/ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/contactsOperations';

export function ContactList() {
  const dispatch = useDispatch();
  const arrayOfContacts = useSelector(state => state.contacts.items);
  const valueOfFilter = useSelector(state => state.filter);
  const visibleContacts = arrayOfContacts.filter(contact =>
    contact.name.toLowerCase().includes(valueOfFilter.toLowerCase())
  );

  async function deleteContactById(id) {
    await dispatch(deleteContact(id));
    dispatch(fetchContacts());
  }

  return (
    <ul className="list">
      {visibleContacts.map(contact => {
        return (
          <li className="item" key={contact.id}>
            <p className="contact">
              {contact.name}: {contact.phone}
            </p>
            <button
              className="deleteButton"
              onClick={() => deleteContactById(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
