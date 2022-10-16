import React from 'react';
import { CatDetail, CatListMap } from '@components/main';
import { FAKE_CAT } from '../models/cat';
import { Container } from '@pages/Main.style';

const MainPage = () => {
  return (
    <Container>
      <CatListMap />
      <CatDetail cat={FAKE_CAT} />
    </Container>
  );
};

export default MainPage;
