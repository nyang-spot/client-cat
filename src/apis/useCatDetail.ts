import { AxiosResponse } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';
import http from './http';
import { Cat } from '@modles/cat';

const getCatDetail = (id: number) => {
  return http.get(`/cats/${id}`);
};

export const useCatDetail = (id: number | null) => {
  const { data } = useQuery<AxiosResponse<Cat>>(['catDetail', id], () => getCatDetail(id!), { enabled: !!id });

  return { data: data?.data };
};
