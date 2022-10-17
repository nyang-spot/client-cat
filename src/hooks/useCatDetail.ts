import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Cat } from '@models/cat';
import { getCatDetail } from '@apis/main';

export const useCatDetail = (id: number | null) => {
  const { data } = useQuery<AxiosResponse<Cat>>(['catDetail', id], () => getCatDetail(id!), {
    enabled: !!id,
    keepPreviousData: true,
  });

  return { data: data?.data };
};
