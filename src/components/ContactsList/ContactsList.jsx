import PropTypes from 'prop-types';
import { List, ButtonDelete } from './ContactsList.styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice.js';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { BsTelephone } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

export const ContactsList = ({ id, name, phone }) => {
  const { data, error, isLoading } = useGetContactsQuery();
  const { filter } = useSelector(getFilter);
  const [deleteContact] = useDeleteContactMutation();
  const handleDelete = async contact => {
    try {
      await deleteContact(contact.id);
      alert('Contact was delete from your phonebook');
    } catch (e) {
      alert('Something wrong. Please, try again');
    }
  };
  if (!data) {
    return null;
  }
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {!error && isLoading && <div>Loading...</div>}
      <List>
        {visibleContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <ButtonDelete onClick={() => handleDelete({ id })} type="button">
              Delete
            </ButtonDelete>
            <span>
              <IoIosContact />
              {name}
            </span>
            <p>
              <BsTelephone />
              {phone}
            </p>
          </li>
        ))}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.object,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
