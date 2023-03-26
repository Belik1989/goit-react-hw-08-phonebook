import { BsJournalBookmark } from 'react-icons/bs';

import { PhoneBook } from '../components/PhoneBook/PhoneBook';
import { MainTitle } from '../components/PhoneBook/PhoneBook.styled';
import { ContactsList } from '../components/ContactsList/ContactsList';
import {
  ContactsTitle,
  ContactsSection,
  ContactsNumbers,
} from '../components/ContactsList/ContactsList.styled';
import { Filter } from '../components/Filter/Filter';

import {
  FormSection,
  PhoneBookBody,
} from '../components/PhoneBook/PhoneBook.styled';

const Contacts = () => {
  return (
    <PhoneBookBody>
      <MainTitle>
        Phonebook
        <BsJournalBookmark />
      </MainTitle>

      <FormSection>
        <PhoneBook />
      </FormSection>
      <ContactsSection>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />

        <ContactsList />

        <ContactsNumbers></ContactsNumbers>
      </ContactsSection>
    </PhoneBookBody>
  );
};

export default Contacts;
