import React, { useState } from 'react';
import { CatDetail, CatListMap } from '@components/main';
import { Container, MainTitle, MainTitleHighlight } from '@pages/Main.style';
import { useCatDetail } from '@hooks/useCatDetail';

const MainPage = () => {
  const [selectedCat, setSelectedCat] = useState<number | null>(null);

  const onChangeSelectedCat = (id: number) => {
    setSelectedCat(id);
  };

  const { data: cat } = useCatDetail(selectedCat);

  return (
    <Container>
      <MainTitle>
        <MainTitleHighlight>강남구</MainTitleHighlight> 고양이 보기
      </MainTitle>
      <CatListMap onClickMarker={onChangeSelectedCat} />
      {cat && selectedCat && <CatDetail cat={cat} />}
    </Container>
  );
};

export default MainPage;
