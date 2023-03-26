import PropTypes from 'prop-types';

import { useAddContactMutation } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
import {
  Form,
  ContactFormINput,
  FormLabel,
  AddContactFormBtn,
} from './PhoneBook.styled';

export function PhoneBook() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const contactData = { name, phone };
    form.reset();

    if (data.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    try {
      await addContact(contactData);
      alert('Contact was added to your phonebook');
    } catch (e) {
      alert('Oops, try again');
    }
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
      <FormLabel htmlFor="phone">
        Phone
        <ContactFormINput
          type="tel"
          name="phone"
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
