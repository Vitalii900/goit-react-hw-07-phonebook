import '../ContactList/ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/store';

export function ContactList() {
  const dispatch = useDispatch();
  const arrayOfContacts = useSelector(state => state.contacts.array);
  const valueOfFilter = useSelector(state => state.filter);
  const visibleContacts = arrayOfContacts.filter(contact =>
    contact.name.toLowerCase().includes(valueOfFilter.toLowerCase())
  );
  return (
    <ul className='list'>
      {visibleContacts.map(contact => {
        return (
          <li className="item" key={contact.id}>
            <p className="contact">
              {contact.name}: {contact.number}
            </p>
            <button
              className="deleteButton"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
