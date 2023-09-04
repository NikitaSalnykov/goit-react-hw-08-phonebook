import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import { nanoid } from 'nanoid';
import { RecommendedContainer } from './Recommended.styled';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import Notiflix from 'notiflix';
import { createContactsThunk, deleteContactsThunk } from 'store/contacts/thunk';

export const Recommended = ({title, data}) => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  

const addContact = ({ id, name, number }) => {
  const existingContact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (existingContact) {
Notiflix.Notify.failure(`${name} has been removed from your contacts`);
    dispatch(deleteContactsThunk(existingContact.id));
    return;
  }

  dispatch(createContactsThunk({ name, number, id: nanoid() }));
  Notiflix.Notify.success('Contact added successfully');
};

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <RecommendedContainer>
         <List>
      {data.map(contact => {
          return (
            <ListItem
              key={nanoid()}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => addContact(contact)}>
                  {!contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase()) ?
                    <AddIcon /> : <DoneIcon style={{fill: 'green'}}/>}
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <div>
                <ListItemText
                  style={{ marginRight: '20px' }}
                  primary={`${contact.name}:`}
                />
                <ListItemText
                  style={{ marginRight: '20px' }}
                  secondary={`tel. ${contact.number}`}
                />
              </div>
            </ListItem>
          );
        })}
      </List>
      </RecommendedContainer>
    </div>
  )
}
