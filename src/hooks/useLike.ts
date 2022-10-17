import { postLike } from '@apis/main';
import { Cat } from '@models/cat';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const UseLike = () => {
  const queryClient = useQueryClient();
  return useMutation(postLike, {
    onMutate: async catId => {
      await queryClient.cancelQueries(['catDetail', catId]); // 쿼리 취소
      // 이전 값 가져옴
      const previousCat = queryClient.getQueryData<AxiosResponse<Cat>>(['catDetail', catId]);
      // 새 값으로 업데이트
      if (previousCat) {
        const prevLikes = (previousCat.data as unknown as Cat)._count.likes;
        const newCat = {
          ...previousCat,
          data: { ...previousCat.data, _count: { ...previousCat.data._count, likes: prevLikes + 1 }, isLiked: true },
        };
        queryClient.setQueryData<AxiosResponse<Cat>>(['catDetail', catId], newCat);
      }
      return { previousCat };
    },
    onError: (err: AxiosError, catId: number, context?: { previousCat: AxiosResponse<Cat> | undefined }) => {
      if (context?.previousCat) {
        // error 인 경우 onMutate에서 반환된 값으로 롤백
        queryClient.setQueryData<AxiosResponse<Cat>>(['catDetail', catId], context.previousCat);
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
