import styled from 'styled-components';

export const SearchBox = styled.div`
  width: fit-content;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    color: #2c9bed;
    padding: 4px;
  }
`;

export const SearchInput = styled.input`
  display: block;
  border-radius: 6px;
  padding: 0px;
  outline: none;
  border: transparent;
  width: 100%;
  padding: 2px 2px 2px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
