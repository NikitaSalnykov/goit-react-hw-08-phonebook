import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import { deleteContactsThunk } from 'store/contacts/thunk';
import { getFilter } from 'store/filter/selectors';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normilizedFilterValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilterValue)
    );
  };

  const filteredContacts = getFilteredContacts();

  const onDeleteBtn = id => {
    dispatch(deleteContactsThunk(id));
  };

  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ListItem
            key={contact.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon onClick={() => onDeleteBtn(contact.id)} />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <div>
              <ListItemText
                style={{ marginRight: '20px' }}
                primary={`${contact.name}:`}
              />
              <ListItemText
                style={{ marginRight: '20px' }}
                secondary={contact.number}
              />
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};
