import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/contacts/selectors';
import { createContactsThunk, deleteContactsThunk } from 'store/contacts/thunk';
import { getFilter, getFilterOptions } from 'store/filter/selectors';
import * as React from 'react';
import styles from './styles.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const filterOption = useSelector(getFilterOptions);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normilizedFilterValue = filter.toLowerCase();
    
      const filterResult = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normilizedFilterValue)
    );

    switch (filterOption) {
      case "new":
 return filterResult.reverse()
            case "old":
         return filterResult
              case "z-a":
         return filterResult.slice().sort((a, b) => {
          return b.name.localeCompare(a.name); 
        });
              case "a-z":
         return filterResult.slice().sort((a, b) => {
          return a.name.localeCompare(b.name); 
         });
                    case "favorite":
         return filterResult.slice().filter(el => {
           return el.number.split('').includes('★'); 
        });
    
      default:
         return filterResult
    }
    };

    const filteredContacts = getFilteredContacts();

    const onDeleteBtn = id => {
      dispatch(deleteContactsThunk(id));
  };
  
  const handleFavorite = ({ name, number, id }) => {
    if (number.split('').includes('★')) {
       dispatch(deleteContactsThunk(id));
    dispatch(createContactsThunk({ name: name, number: number.slice(1) }));
    } else {
          dispatch(deleteContactsThunk(id));
    dispatch(createContactsThunk({ name, number: `★ ${number}` }));
    }

  }

    return (
      <List>
        {filteredContacts.map(contact => {
          return (
            <ListItem
              key={contact.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDeleteBtn(contact.id)}>
                  <DeleteIcon  />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar className={contact.number.split('').includes('★') ? styles.favorite : styles.default} onClick={() => handleFavorite(contact)}>
                 {!contact.number.split('').includes('★') ? <PersonIcon /> : "★"}
                </Avatar>
              </ListItemAvatar>
              <div>
                <ListItemText
                  style={{ marginRight: '20px' }}
                  primary={`${contact.name}`}
                />
                <ListItemText
                  style={{ marginRight: '20px' }}
                  secondary={`${contact.number.split('').includes('★') ? contact.number.split('').slice(1).join('') : contact.number}`}
                />
              </div>
            </ListItem>
          );
        })}
      </List>
    );
  }

