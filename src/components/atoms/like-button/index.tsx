import Icon from '@components/icon';
import { Button, LikeText } from '@components/main/CatDetail.style';
import React from 'react';
interface Props {
  isLiked:boolean;
  onLike: () => void;
  likes: number;
}
const LikeButton = ({isLiked, onLike, likes}:Props) => {
  return (
    <>
      {!isLiked ? (
        <Button onClick={onLike}>Like</Button>
      ) : (
        <LikeText>
          <Icon type='HEART' /> {likes}
        </LikeText>
      )}
    </>
  );
};

export default LikeButton;
