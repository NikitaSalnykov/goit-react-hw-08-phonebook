import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'store/contacts/selectors';
import { getContactsThunk } from 'store/contacts/thunk';
import { Loader } from 'components/Loader/Loader';

import React from 'react'
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { DivContainer, Section } from 'components/App/App.styled';


 const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
         <Section>
      <DivContainer>
        <h2>Phonebook</h2>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        {isLoading && !error ? <ContactList/> : <Loader/>}
         </DivContainer>
    </Section>

  );
};

export default Contacts;