import React, { useState } from 'react';
import { CatDetail, CatListMap } from '@components/main';
import { Container } from '@pages/Main.style';
import { useCatDetail } from '@apis/useCatDetail';

const MainPage = () => {
  const [selectedCat, setSelectedCat] = useState<number | null>(null);

  const onChangeSelectedCat = (id: number) => {
    setSelectedCat(id);
  };

  const { data: cat } = useCatDetail(selectedCat);

  return (
    <Container>
      <CatListMap onClickMarker={onChangeSelectedCat} />
      {cat && selectedCat && <CatDetail cat={cat} />}
    </Container>
  );
};

export default MainPage;
