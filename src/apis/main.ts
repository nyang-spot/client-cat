import CatsResponse from '@models/catResponse';
import http from './http';

export const getMarkers = () => {
  return http.get('/cats');
};

export const getCatDetail = (id: number) => {
  return http.get(`/cats/${id}`);
};

export const postLike = (id: number) => {
  return http.post('/like', { id });
};

export const getCats = async () => {
  const { data } = await http.get<CatsResponse[]>('/cats');
  return data;
};
