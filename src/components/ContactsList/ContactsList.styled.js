import styled from 'styled-components';

export const List = styled.ul`
  font-family: 'Cochin', serif;
  font-size: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  margin: 0px;
  padding-left: 0px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  height: 280px;
  overflow-y: scroll;

  & li:nth-child(even) {
    background: #f3f3f3;
  }
  & li {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 2px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
  }
  & p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: auto;
    font-family: 'Franklin Gothic Medium', sans-serif;
  }
  & svg {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
`;

export const ContactsTitle = styled.h2`
  font-family: 'Lucida Sans', sans-serif;
  /* font-size: 40px; */
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
`;
export const ContactsSection = styled.section`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 20px 0px 20px;
`;

export const ContactsNumbers = styled.span`
  display: flex;
  justify-content: space-evenly;
  font-family: 'Montserrat', sans-serif;
  padding: 0px 12px 10px 12px;
  margin-top: 8px;
  border-bottom: 5px solid darkgray;
  width: fit-content;
  margin-right: auto;
  margin-left: auto;
  /* border-radius: 6px; */
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const ButtonDelete = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
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
    box-shadow: 0 0 40px 40px #e74c3c inset;
  }
`;

export const NoContactsSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 50px;

  & svg {
    width: 60px;
    height: 60px;
  }
`;
