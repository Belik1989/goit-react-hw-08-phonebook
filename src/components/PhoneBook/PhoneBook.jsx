import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  Form,
  ContactFormINput,
  FormLabel,
  AddContactFormBtn,
} from './PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export function PhoneBook() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = { name, number };
    form.reset();
    if (contacts.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }

    dispatch(addContact(contactData));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <ContactFormINput
          type="text"
          placeholder="Contact name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FormLabel>
      <FormLabel htmlFor="number">
        Phone
        <ContactFormINput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Phone number"
        />
      </FormLabel>
      <AddContactFormBtn type="submit">Add contact +</AddContactFormBtn>
    </Form>
  );
}

PhoneBook.propTypes = {
  contacts: PropTypes.object,
};
