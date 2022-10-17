import { getCats } from '@apis/main';
import { useQuery } from 'react-query';

const useGetCats = () => {
  return useQuery('catList', getCats);
};
export default useGetCats;
