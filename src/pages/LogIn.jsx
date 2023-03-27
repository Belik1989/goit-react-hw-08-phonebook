import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import {
  Form,
  FormSection,
  FormLabel,
  ContactFormINput,
  AddContactFormBtn,
  SwitchPassViewBtn,
  PassBlock,
} from 'components/PhoneBook/PhoneBook.styled';
import {
  ContactsTitle
} from '../components/ContactsList/ContactsList.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const LogIn = () => {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const changePasswordType = e => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    }
    setPasswordType('text');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormSection>
      <Form onSubmit={handleSubmit}>
        <ContactsTitle>Log In</ContactsTitle>
        <FormLabel htmlFor="">
          Email
          <ContactFormINput
            required
            name="email"
            type="text"
          ></ContactFormINput>
        </FormLabel>
        <FormLabel htmlFor="">
          <PassBlock>
            <span>Password</span>
            <SwitchPassViewBtn onClick={changePasswordType}>
              {passwordType === 'password' && <BsEyeSlash />}
              {passwordType === 'text' && <BsEye />}
            </SwitchPassViewBtn>
          </PassBlock>
          <ContactFormINput
            required
            name="password"
            type={passwordType}
          ></ContactFormINput>
        </FormLabel>
        <AddContactFormBtn type="submit">Log In</AddContactFormBtn>
      </Form>
    </FormSection>
  );
};

export default LogIn;
