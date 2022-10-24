import React, { useCallback } from 'react';
import { Cat } from '@models/cat';
import { Container } from './CatDetail.style';
import { UseLike } from '@hooks/useLike';
import InfoBox from '@components/atoms/info-box';
import LikeButton from '@components/atoms/like-button';

interface Props {
  cat: Cat;
}
/* 업로드 구현 완료 후 테스트 필요 */
const CatDetail = ({ cat }: Props) => {
  const likeMutate = UseLike();

  const onLike = useCallback(() => {
    likeMutate.mutate(cat.id);
  }, [likeMutate, cat]);

  const isValidUrl = cat?.image.includes('http');

  return (
    <Container>
      <InfoBox isValidUrl={isValidUrl} image={cat?.image} description={cat.description} />
      <LikeButton isLiked={cat.isLiked} onLike={onLike} likes={cat._count.likes} />
    </Container>
  );
};

export default CatDetail;
