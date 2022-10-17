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
      <h1><span>새로운</span> 고양이 등록</h1>
      <div className='comment'>❤️ <span>매력 포인트</span>나 <span>특징</span>을 작성해주세요.</div>
      <div className='cat-area'>
        <ImageLoader>
          <img src={preview ?? defaultImg} alt='preview' />
          <input type='file' accept='image/*' onChange={handleImageUpload} />
        </ImageLoader>
        <textarea
          name='description'
          cols={30}
          rows={10}
          placeholder='어떤 고양이였나요?'
          onChange={handleDescription}
        />
      </div>
      <div className='comment'>
        <div>출몰지역을 선택해주세요.</div>
        <div className='small'>지도를 움직이면 위치를 변경할 수 있어요!</div>
      </div>
      <UploadMap 
        setForm={setForm} 
        addressValid={addressValid} 
        address={form.address} 
        defaultLocation={defaultLocation}
      />
      <button disabled={!formValid || !addressValid}>등록하기</button>
    </UploadForm>
  );
};

export default UploadPage;
