import React, { useEffect, useState, useMemo } from 'react';
import defaultImg from '../assets/images/defaultImg.png';
import UploadMap from '@components/upload/UploadMap';
import { ImageLoader, UploadForm } from './Upload.style';
import { PostData } from '@models/postData';
import { useUpload } from '@hooks/useUpload';

const UploadPage = () => {
  const defaultLocation = {
    latitude: 37.498095,
    longitude: 127.02761,
  };
  const [form, setForm] = useState<PostData>({
    imageUrl: null,
    description: '',
    position: {
      latitude: defaultLocation.latitude,
      longitude: defaultLocation.longitude,
    },
    address: '서울특별시 강남구 역삼동 858',
  });
  const uploadMutate = useUpload();

  const [preview, setPreview] = useState<string | null>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (!file || file.type.substring(0, 5) !== 'image') return;

    setForm(pre => {
      return { ...pre, imageUrl: file ?? null };
    });
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setForm(pre => {
      return { ...pre, description: value };
    });
  };

  const postCat = async ()=> {
    const formData = new FormData();
    const location = form.address.split(' ').slice(0, 2).join(' ');

    formData.append('catImage', form.imageUrl!);
    formData.append('description', form.description);
    formData.append('latitude', `${form.position.latitude}`);
    formData.append('longitude', `${form.position.longitude}`);
    //formData.append('location', location);
    formData.append('location', 'gannamgu');
    await http.post('/cats', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  const { mutate } = useMutation(postCat);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    uploadMutate.mutate(form);
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
      <UploadMap setForm={setForm} addressValid={addressValid} address={form.address} defaultLocation={defaultLocation}/>
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
