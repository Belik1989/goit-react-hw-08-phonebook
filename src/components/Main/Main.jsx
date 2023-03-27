import { MainContainer } from './Main.styled';
import { BsJournalBookmark } from 'react-icons/bs';
import { MainTitle } from 'components/PhoneBook/PhoneBook.styled';
import { Container } from 'components/Menu/Menu.styled';
const Main = () => {
  return (
    <Container>
      <MainContainer>
        <MainTitle>
          Welcome to our Phonebook
          <BsJournalBookmark />
        </MainTitle>
      </MainContainer>
    </Container>
  );
};

export default Main;
