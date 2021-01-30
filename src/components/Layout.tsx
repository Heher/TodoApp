import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyles';

const OuterWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  width: 100%;
  height: 100vh;
  background: rgb(221, 221, 221);
  background: linear-gradient(180deg, rgba(200, 200, 200, 1) 0%, rgba(247, 247, 247, 1) 100%);
`;

const Layout: React.FC = ({ children }) => (
  <OuterWrapper>
    <GlobalStyle />
    {children}
  </OuterWrapper>
);

export default Layout;
