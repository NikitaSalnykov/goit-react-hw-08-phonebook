import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'store/filter/filterSlice';
import { FilterWrapper } from './Filter.styled';
import { IoIosSearch } from 'react-icons/io';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget }) => {
    dispatch(filterContacts(currentTarget.value));
  };

  return (
    <FilterWrapper>
      <label style={{ marginRight: '14px' }} htmlFor="filter">
        <IoIosSearch size={20} />
      </label>
      <TextField
        id="filter"
        type="text"
        name="input"
        required
        onChange={handleFilter}
        variant="standard"
      />
    </FilterWrapper>
  );
};
