import http from './http';

export const getMarkers = () => {
  return http.get('/cats');
};


export const getCatDetail = (id: number) => {
  return http.get(`/cats/${id}`);
};

export const postLike = (id: number) => {
  return http.post(`/cats/${id}/favorite`);
};