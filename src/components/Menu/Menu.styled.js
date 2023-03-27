import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-radius: 10px;
  margin-bottom: 16px;
  /* border-bottom: 1px solid black; */

  > nav {
    display: flex;
    margin-left: 10px;
  }
  box-shadow: 0 45px 65px rgba(0, 0, 0, 0.5), 0 35px 22px rgba(0, 0, 0, 0.16);
`;

export const LinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: #2c9bed;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const SpanWelcome = styled.span`
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const SpanUser = styled.span`
  padding: 8px 0px;
  border-radius: 4px;
  text-decoration: none;
  margin-right: 10px;
  color: #2c9bed;
  font-weight: 500;
`;
