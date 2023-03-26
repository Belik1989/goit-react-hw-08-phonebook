import styled from 'styled-components';

export const AddNewContactBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #2c9bed;
  border-radius: 0.6em;
  color: #2c9bed;
  cursor: pointer;
  margin-left: 20px;
  padding: 5px;
  display: flex;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #2c9bed inset;
  }
`;

export const MainTitle = styled.h1`
  color: white;
  background-color: #2c9bed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 6px;
  padding: 10px 15px 10px 15px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  & svg {
    margin-left: 6px;
  }
`;

export const Form = styled.form`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  gap: 10px;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const FormSection = styled.section`
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const PhoneBookBody = styled.div`
  border: 6px solid;
  border-radius: 24px;
  border-color: darkgray;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  box-shadow: 0 45px 65px rgba(0, 0, 0, 0.5), 0 35px 22px rgba(0, 0, 0, 0.16);
  margin-bottom: 20px;
  background: rgb(230, 230, 230);
  background: radial-gradient(
    circle,
    rgba(230, 230, 230, 1) 0%,
    rgba(222, 217, 219, 1) 19%,
    rgba(179, 200, 226, 1) 100%
  );
`;

export const ContactFormINput = styled.input`
  margin-right: auto;
  padding: 2px 2px 2px 10px;
  border-radius: 6px;
  border-color: #2c9bed;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
export const FormLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  list-style: none;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  margin: 0px;
  padding-left: 0px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const AddContactFormBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #87ad5c;
  border-radius: 0.6em;
  color: #87ad5c;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px #87ad5c inset;
  }
`;
