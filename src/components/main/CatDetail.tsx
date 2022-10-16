import React from 'react';
import { CatInfoBox, Container, Description, Image, ImageWrapper, LikeButton } from './CatDetail.style';

const CatDetail = () => {
  return (
    <Container>
      <CatInfoBox>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <Description>이 고양이는 미묘입니다.</Description>
      </CatInfoBox>
      <LikeButton>Like</LikeButton>
    </Container>
  );
};

export default CatDetail;
