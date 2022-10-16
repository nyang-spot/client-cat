import { Marker } from '@modles/marker';
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import http from './http';

const getMarkers = () => {
  return http.get('/cats');
};

export const useMarkers = () => {
  const { data } = useQuery<AxiosResponse<Marker[]>>(['postMarkers'], getMarkers);

  return { data: data?.data };
};
