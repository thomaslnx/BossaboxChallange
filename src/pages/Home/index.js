import React from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';
import { Container } from './styles';

import GlobalStyle from '../../styles/global';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
      </Container>
    </>
  );
}
