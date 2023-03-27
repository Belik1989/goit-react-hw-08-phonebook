import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/operations';
import {
  Form,
  FormSection,
  FormLabel,
  ContactFormINput,
  AddContactFormBtn,
  SwitchPassViewBtn,
  PassBlock,
} from 'components/PhoneBook/PhoneBook.styled';
import { ContactsTitle } from '../components/ContactsList/ContactsList.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Registration = () => {
  const [passwordType, setPasswordType] = useState('password');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const changePasswordType = e => {
    e.preventDefault();
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    }
    setPasswordType('text');
  };
  return (
    <FormSection>
      <Form onSubmit={handleSubmit}>
        <ContactsTitle>Sign up</ContactsTitle>
        <FormLabel htmlFor="">
          Email
          <ContactFormINput required type="email" name="email" />
        </FormLabel>
        <FormLabel htmlFor="">
          <PassBlock>
            <span>Password</span>
            <SwitchPassViewBtn onClick={changePasswordType}>
              {passwordType === 'password' && <BsEyeSlash />}
              {passwordType === 'text' && <BsEye />}
            </SwitchPassViewBtn>
          </PassBlock>

          <ContactFormINput required type={passwordType} name="password" />
        </FormLabel>
        <FormLabel htmlFor="">
          Name
          <ContactFormINput required type="text" name="name" />
        </FormLabel>
        <AddContactFormBtn type="submit">Sign up</AddContactFormBtn>
      </Form>
    </FormSection>
  );
};
export default Registration;
