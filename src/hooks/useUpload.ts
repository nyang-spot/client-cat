import { postCat } from '@apis/main';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const useUpload = () => {
  const navigate = useNavigate();
  return useMutation(postCat, {
    onSuccess: () => {
      navigate('/main');
    },
  });
};
