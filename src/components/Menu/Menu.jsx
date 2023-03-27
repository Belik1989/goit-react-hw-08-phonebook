import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import * as React from 'react';
import Button from '@mui/material/Button';

import {
  Header,
  Container,
  LinkStyled,
  UserMenu,
  SpanWelcome,
  SpanUser,
} from './Menu.styled';
const Menu = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <Header>
        <div>
          <LinkStyled to="/" end>
            Home
          </LinkStyled>
          {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
        </div>
        {isLoggedIn ? (
          <UserMenu>
            <SpanWelcome>Welcome,</SpanWelcome>
            <SpanUser> {user.name}</SpanUser>
            <Button
              onClick={handleLogOut}
              variant="outlined"
              href="#outlined-buttons"
            >
              Log Out
            </Button>
          </UserMenu>
        ) : (
          <div>
            <LinkStyled to="/register">Registration</LinkStyled>
            <LinkStyled to="/login">Log In</LinkStyled>
          </div>
        )}
      </Header>
    </Container>
  );
};

export default Menu;
