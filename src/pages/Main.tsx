import React from 'react';
import { CatDetail } from '@components/main';
import { FAKE_CAT } from '../models/cat';
import { Container } from '@pages/Main.style';

const MainPage = () => {
  return (
    <Container>
      main
      <CatDetail cat={FAKE_CAT} />
    </Container>
  );
};

export default MainPage;
