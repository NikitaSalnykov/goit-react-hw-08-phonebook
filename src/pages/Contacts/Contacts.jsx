import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'store/contacts/selectors';
import { getContactsThunk } from 'store/contacts/thunk';
import { Loader } from 'components/Loader/Loader';

import React from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { DivContainer, Section } from 'components/App/App.styled';
import { ContactsWrapper, ListWrapper } from './Contacts.styled';

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
        <ContactsWrapper>
          <div>
            <h2>Phonebook</h2>
            <ContactForm />
          </div>
          <ListWrapper>
            <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
            <Filter />
            {isLoading && !error ? <ContactList /> : <Loader />}
          </ListWrapper>
        </ContactsWrapper>
      </DivContainer>
    </Section>
  );
};

export default Contacts;
