import { Marker } from '@modles/marker';
import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

const getMarkers = () => {
  const user = localStorage.getItem('user');

  const userObject = JSON.parse(user!);

  return axios.get('http://13.125.74.165:3000/cats', { headers: { Authorization: userObject.id } });
};

export const useMarkers = () => {
  const { data } = useQuery<AxiosResponse<Marker[]>>(['postMarkers'], getMarkers);

  return { data: data?.data };
};
