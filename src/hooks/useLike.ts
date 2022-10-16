import { postLike } from '@apis/main';
import { Cat } from '@modles/cat';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const UseLike = () => {
  const queryClient = useQueryClient();
  return useMutation(postLike, {
    onMutate: async catId => {
      await queryClient.cancelQueries(['catDetail', catId]); // 쿼리 취소
      // 이전 값 가져옴
      const previousCat = queryClient.getQueryData<Cat>(['catDetail', catId]);
      // 새 값으로 업데이트
      if (previousCat) {
        const newCat = { ...previousCat, likes: previousCat.likes + 1 };
        queryClient.setQueryData<Cat>(['catDetail', catId], newCat);
      }
      return { previousCat };
    },
    onError: (err: AxiosError, catId: number, context?: { previousCat: Cat | undefined }) => {
      if (context?.previousCat) {
        // error 인 경우 onMutate에서 반환된 값으로 롤백
        queryClient.setQueryData<Cat>(['catDetail', catId], context.previousCat);
      }
    },
    onSettled: catId => {
      queryClient.invalidateQueries(['catDetail', catId]);
    },
  });
};
/*
{
  "id": 1,
  "description": "커여움",
  "imageUrl": "http://xxx.xxx.xxx.xxx:3000/images/xxx.jpg",
  "address": "강남구",
  "likes": 123,
  "isLiked": true
}
*/
