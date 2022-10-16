import React from 'react';
import { Cat } from '@modles/cat';
import { CatInfoBox, Container, Description, Image, ImageWrapper, LikeButton } from './CatDetail.style';

interface Props {
  cat: Cat;
}

const CatDetail = ({ cat }: Props) => {
  return (
    <Container>
      <CatInfoBox>
        <ImageWrapper>
          <Image src={cat.imageUrl} />
        </ImageWrapper>
        <Description>{cat.description}</Description>
      </CatInfoBox>
      {!cat.isLiked && <LikeButton>Like</LikeButton>}
    </Container>
  );
};

export default CatDetail;
