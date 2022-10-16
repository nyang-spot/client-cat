import React, { useEffect, useState, useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImg from '../assets/images/defaultImg.png';
import UploadMap from '@components/upload/UploadMap';
import { ImageLoader, UploadForm } from './Upload.style';

interface CatData {
  imageUrl: File | null;
  description: string;
  position: {
    latitude: number;
    longitude: number;
  };
  address: string;
}

const UploadPage = () => {
  const [form, setForm] = useState<CatData>({
    imageUrl: null,
    description: '',
    position: {
      latitude: 0,
      longitude: 0,
    },
    address: '서울특별시 강남구 역삼동 858',
  });
  const [preview, setPreview] = useState<string | null>('');

  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (!file || file.type.substring(0, 5) !== 'image') return;

    setForm((pre) => {
      return { ...pre, imageUrl: file ?? null };
    });
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setForm((pre) => {
      return { ...pre, description: value };
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 등록 form state 보내준다.
    navigate('/');
  };

  useEffect(() => {
    if (form.imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(form.imageUrl);
    } else {
      setPreview(defaultImg);
    }
  }, [form.imageUrl]);

  const formValid = useMemo(() => {
    return Object.values(form).every(data => data);
  }, [form]);

  const addressValid = useMemo(() => {
    return form.address.split(' ')[1] === '강남구';
  }, [form]);

 
  return (
    <UploadForm onSubmit={handleSubmit}>
      <h2>아이콘을 눌러서 사진을 올려주세요!</h2>
      <ImageLoader>
        <img src={preview ?? defaultImg} alt='preview' />
        <input type='file' accept='image/*' onChange={handleImageUpload} />
      </ImageLoader>
      <UploadMap
        setForm={setForm}
        addressValid={addressValid}
        address={form.address}
      />
      <textarea
        name='description'
        cols={30}
        rows={10}
        placeholder='어떤 고양이였는지 설명해 주세요!'
        autoFocus
        onChange={handleDescription}
      />
      <button disabled={!formValid || !addressValid}>등록</button>
    </UploadForm>
  );
};
export default UploadPage;
