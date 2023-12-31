import { DivContainer, Section } from 'components/App/App.styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeContainer,
  ListWrapper,
  RecommendedOverlay,
  TextWrapper,
} from './Home.styled';
import { IoIosContacts } from 'react-icons/io';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Recommended } from 'components/Recommended/Recommended';
import { getContactsThunk } from 'store/contacts/thunk';
import { recommended, embassies } from 'data/dataContacts';
import PushPinIcon from '@mui/icons-material/PushPin';
import { FavoriteContact } from 'components/FavoriteContact/FavoriteContact';

const Home = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userInform = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getContactsThunk());
    
  }, [dispatch]);

  return (
    <Section>
      <DivContainer>
        {isLoggedIn ? (
          <>
            <HomeContainer style={{ marginBottom: '10px' }}>
              <div>
                <IoIosContacts size={45} />
              </div>
              <h1>{`${userInform.name}, welcome to Name&Numbers!`}</h1>
              <TextWrapper style={{ marginBottom: 0 }}>
                <p>
                  Tired of losing your contacts and phone numbers? We're here to
                  make your life easier and more organized. <b>Name&Numbers</b>
                  is a convenient and reliable way to store your contacts and
                  phone numbers all in one place.
                </p>
              </TextWrapper>   
            </HomeContainer>
              <FavoriteContact/>
            <div>
              <h2
                style={{
                  margin: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                }}
              >
                <PushPinIcon /> Useful contacts
              </h2>
              <RecommendedOverlay>
                <Recommended title={'Emergency services'} data={recommended} />
                <Recommended title={'Embassies In Europe '} data={embassies} />
              </RecommendedOverlay>
            </div>
            <HomeContainer style={{ marginTop: '20px' }}>
              <Link to={routes.CONTACTS}>
                <Button variant="contained">Go To Contacts</Button>
              </Link>
            </HomeContainer>
          </>
        ) : (
          <HomeContainer>
            <div>
              <IoIosContacts size={45} />
            </div>
            <h1>Welcome to Name&Numbers!</h1>
            <TextWrapper>
              <p>
                Tired of losing your contacts and phone numbers? We're here to
                make your life easier and more organized. <b>Name&Numbers</b> is
                a convenient and reliable way to store your contacts and phone
                numbers all in one place.
              </p>
              <ListWrapper>
                <h2>What we offer:</h2>
                <ul>
                  <li>
                    An easy-to-use and intuitive interface that allows you to
                    quickly add new contacts.
                  </li>
                  <li>
                    Secure and dependable storage of your data, ensuring you can
                    always find the number you need.
                  </li>
                  <li>
                    The ability to organize your contacts into categories for
                    easy retrieval.
                  </li>
                  <li>Access to your contacts from any device, anytime.</li>
                </ul>
              </ListWrapper>
              <p>
                Forget about paper notes and missing numbers! Join Name&Numbers
                and start organizing your contacts simply and efficiently. Get
                started with our service right now and experience all its
                benefits!
              </p>
            </TextWrapper>
            {isLoggedIn ? (
              <Link to={routes.CONTACTS}>
                <Button variant="contained">Contacts</Button>
              </Link>
            ) : (
              <Link to={routes.LOGIN}>
                <Button variant="contained">Create Your Contacts Book</Button>
              </Link>
            )}
          </HomeContainer>
        )}
      </DivContainer>
    </Section>
  );
};

export default Home;
