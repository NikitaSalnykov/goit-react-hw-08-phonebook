
import * as React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import styles from '../ContactList/styles.module.css'
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { Fallback, FavoriteContainer, FavoriteOverlay } from './FavoriteContact.styled';
import PersonIcon from '@mui/icons-material/Person';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const FavoriteContact = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const contacts = useSelector(state => state.contacts.contacts);

  const selectFavoriteContact = () => {
    const favoriteContacts = contacts.filter((contact) =>
  contact.number.split('').includes('★')
);

  const randomIndex = Math.floor(Math.random() * favoriteContacts.length);

    const randomContact = favoriteContacts[randomIndex];
      
    setTimeout(() => {
         setIsLoading(false)
       }, 2000);
    
    return randomContact
  }

  const randomFavoriteContact = selectFavoriteContact()
  
  return (
    <FavoriteContainer >
      <h3>One of your favorites</h3>
      {
        
        randomFavoriteContact ? <div style={{display: 'flex', flexDirection: 'column'}}>
          
         { isLoading ? <FavoriteOverlay ><Loader style={{ margin: '20px' }} /> Need to think </FavoriteOverlay>
:
          <FavoriteOverlay >
          <ListItemAvatar>
            <Link to={routes.CONTACTS}>
              <Avatar className={styles.favorite}>
                  ★
                </Avatar>
            </Link>
              </ListItemAvatar>
              <div>
                <ListItemText
                  style={{ marginRight: '20px' }}
                  primary={`${randomFavoriteContact.name}`}
                />
                <ListItemText
                  style={{ marginRight: '20px' }}
                  secondary={`${randomFavoriteContact.number.split('').slice(1).join('')}`}
            />    
          </div>
          </FavoriteOverlay>}
         <p style={{textAlign: 'center', fontSize: '14px', margin: '0'}}>Maybe today it is worth calling this contact?</p>       
        </div> : 
          <div>
            <FavoriteOverlay style={{marginTop: '0', opacity: '0.7'}}>
              <Link to={routes.CONTACTS}>
               <Fallback>

                <Avatar style={{ position: 'relative', scale: '1.5', transform:" translate(-8px, 10px)"}}>
                  <PersonIcon fontSize="large" />
                                  <div>
                  <AdsClickIcon />
</div>
                </Avatar>

                <Avatar style={{background: 'gold'}}>
                 ★
                </Avatar>
                </Fallback>
              </Link>
            </FavoriteOverlay>
             <p style={{textAlign: 'center', fontSize: '14px', margin: '0'}}><b>You don't have any favorite contacts yet :(</b><br/> To add a contact, click on the avatar</p>       
          </div>
      }
    </FavoriteContainer>
  )
}
