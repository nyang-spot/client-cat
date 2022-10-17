import { PostData } from '@models/postData';
import CatsResponse from '@models/catResponse';
import http from './http';

export const getMarkers = () => {
  return http.get('/cats');
};

export const getCatDetail = (id: number) => {
  return http.get(`/cats/${id}`);
};

export const postLike = (id: number) => {
<<<<<<< HEAD
  return http.post(`/cats/${id}/favorite`);
};
=======
  return http.post('/like', { id });
};

export const postCat = (form: PostData) => {
  const formData = new FormData();
  // const location = form.address.split(' ').slice(0, 2).join(' ');
  formData.append('catImage', form.imageUrl!);
  formData.append('description', form.description);
  formData.append('latitude', `${form.position.latitude}`);
  formData.append('longitude', `${form.position.longitude}`);
  formData.append('location', 'gannamgu');
  return http.post('/cats', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getCats = async () => {
  const { data } = await http.get<CatsResponse[]>('/cats');
  return data;
};
>>>>>>> 635c636f56dc0b289721bc4f5134e3a1df89351f
