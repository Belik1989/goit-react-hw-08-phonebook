import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgb(230, 230, 230);
  background: radial-gradient(
    circle,
    rgba(230, 230, 230, 1) 0%,
    rgba(222, 217, 219, 1) 19%,
    rgba(179, 200, 226, 1) 100%
  );
  box-shadow: 0 45px 65px rgba(0, 0, 0, 0.5), 0 35px 22px rgba(0, 0, 0, 0.16);
`;
