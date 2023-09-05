import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts, filterOptions } from 'store/filter/filterSlice';
import { FilterWrapper, SelectWrapper } from './Filter.styled';
import { IoIosSearch } from 'react-icons/io';
import { NativeSelect, TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget }) => {
    dispatch(filterContacts(currentTarget.value));
  };

  const handleSelect = ({ currentTarget }) => {
    dispatch(filterOptions(currentTarget.value))
  }

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
      <SelectWrapper  style={{marginLeft: '20px'}}>
        <NativeSelect  style={{width: '100px'}}
          defaultValue={'new contacts'}
          onChange={handleSelect}
          
  >
    <option value={'new'}>New</option>
    <option value={'a-z'}>A-Z</option>
        <option value={'z-a'}>Z-A</option>
          <option value={'old'}>Old</option>
          <option value={'favorite'}>Favorite</option>
  </NativeSelect>
 </SelectWrapper>
    </FilterWrapper>
  );
};
