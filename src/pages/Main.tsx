import React, { useState } from 'react';
import { CatDetail, CatListMap } from '@components/main';
import { FAKE_CAT } from '../models/cat';
import { Container } from '@pages/Main.style';

const MainPage = () => {
  const [selectedCat, setSelectedCat] = useState<null | number>(null);

  const onChangeSelectedCat = (id: number) => {
    setSelectedCat(id);
  };

  return (
    <Container>
      <CatListMap onClickMarker={onChangeSelectedCat} />
      {selectedCat && <CatDetail cat={FAKE_CAT[selectedCat]} />}
    </Container>
  );
};

export default MainPage;
