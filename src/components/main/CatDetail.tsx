import React, { useCallback } from 'react';
import { Cat } from '@models/cat';
import { CatInfoBox, Container, Description, Image, ImageWrapper, LikeButton, LikeText } from './CatDetail.style';
import { UseLike } from '@hooks/useLike';
import HeartIcon from '@components/Ranking/Icons/HeartIcon';

interface Props {
  cat: Cat;
}
/* 업로드 구현 완료 후 테스트 필요 */
const CatDetail = ({ cat }: Props) => {
  const likeMutate = UseLike();

  const onLike = useCallback(() => {
    likeMutate.mutate(cat.id);
  }, [likeMutate, cat]);

  return (
    <Container>
      <CatInfoBox>
        <ImageWrapper>
          <Image src={cat.image} />
        </ImageWrapper>
        <Description>{cat.description}</Description>
      </CatInfoBox>
      {!cat.isLiked ? (
        <LikeButton onClick={onLike}>Like</LikeButton>
      ) : (
        <LikeText>
          <HeartIcon /> {cat._count.likes}
        </LikeText>
      )}
    </Container>
  );
};

export default CatDetail;
