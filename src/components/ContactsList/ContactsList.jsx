import PropTypes from 'prop-types';
import { List, ButtonDelete } from './ContactsList.styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, selectContacts } from 'redux/selectors';
import { BsTelephone } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';
import { deleteContact } from 'redux/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchContacts } from 'redux/operations';

export const ContactsList = ({ contact }) => {
  const { filter } = useSelector(getFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id));
      Notify.success('Contact was delete from your phonebook');
    } catch (error) {
      Notify.failure('Something wrong. Please, try again');
    }
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) {
    return null;
  }
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
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
