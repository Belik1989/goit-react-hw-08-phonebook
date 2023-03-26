import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { BiSearchAlt2 } from 'react-icons/bi';
import { SearchBox, SearchInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.value;
    dispatch(addFilter(name));
  };
  return (
    <SearchBox>
      <BiSearchAlt2 />
      <label>
        <SearchInput
          label="filter"
          // variant="outlined"
          placeholder="Find contacts"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          name="name"
        ></SearchInput>
      </label>
    </SearchBox>
  );
};
