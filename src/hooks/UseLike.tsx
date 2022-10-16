import { Cat } from '@modles/cat';
import axios, { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const likeAPI = async (id: string) => {
  return await axios.post('/like', { id }).then(res => res.data);
};
export const UseLike = () => {
  const queryClient = useQueryClient();
  return useMutation(likeAPI, {
    onMutate: async catId => {
      await queryClient.cancelQueries(['cat', catId]); // 쿼리 취소
      // 이전 값 가져옴
      const previousCat = queryClient.getQueryData<Cat>(['cat', catId]);
      // 새 값으로 업데이트
      if (previousCat) {
        const newCat = { ...previousCat, likes: previousCat.likes + 1 };
        queryClient.setQueryData<Cat>(['cat', catId], newCat);
      }
      return { previousCat };
    },
    onError: (err: AxiosError, catId: string, context?: { previousCat: Cat | undefined }) => {
      if (context?.previousCat) {
        // error 인 경우 onMutate에서 반환된 값으로 롤백
        queryClient.setQueryData<Cat>(['cat', catId], context.previousCat);
      }
    },
    onSettled: catId => {
      queryClient.invalidateQueries(['cat', catId]);
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
