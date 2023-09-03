import { TextField } from '@mui/material';
import { Form } from './ContactForm.styled';
import { Button } from '@mui/material';
import Notiflix from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import { createContactsThunk } from 'store/contacts/thunk';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.info(`${name} is already in contcts`);
      return;
    }

    dispatch(createContactsThunk({ name, number }));
    Notiflix.Notify.success('Contact added successfully');
  };

  const onSubmitClick = e => {
    e.preventDefault();

    if (!name.trim() && !number.trim()) {
      Notiflix.Notify.failure('Empty input!');
      return;
    }

    handleFormSubmit({ name, number });
  };

  return (
    <Form onSubmit={onSubmitClick}>
      <TextField
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
        variant="outlined"
        label="Name"
      />

      <TextField
        id="tel"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
        variant="outlined"
        label="Number"
      />
      <Button style={{ marginTop: '10px' }} variant="contained" type="submit">
        Add to contacts
      </Button>
    </Form>
  );
};
