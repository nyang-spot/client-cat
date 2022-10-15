import React, { useEffect, useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import defaultImg from '../assets/images/defaultImg.png';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 3rem;
  padding: 1em;

  textarea {
    font-size: 1rem;
    font-family: inherit;
    padding: 0.75rem;
    width: '100%';
    height: 7rem;
    border: solid 0.15rem gray;
    border-radius: 5px;
    outline: none;
    resize: none;
    &:focus {
      color: $oc-teal-7;
      border: solid 0.15rem orange;
      border-radius: 5px;
    }
    &::placeholder {
      font-size: 0.75rem;
    }
  }

  button {
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
    background-color: orange;

    :disabled {
      background-color: gray;
    }
  }
`;

const ImageLoader = styled.label`
  width: 150px;
  height: 150px;
  &:hover {
    cursor: pointer;
  }
  img {
    width: inherit;
    height: inherit;
    border-radius: 5px;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;

interface CatData {
  imageUrl: File | null;
  description: string;
  // position: {
  //   latitude: number;
  //   longitude: number;
  // };
  // address: string;
}

const UploadPage = () => {
  const [form, setForm] = useState<CatData>({
    imageUrl: null,
    description: '',
    // position: {
    //   latitude: 0,
    //   longitude: 0,
    // },
    // address: '',
  });
  const [preview, setPreview] = useState<string | null>('');

  const navigate = useNavigate();

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
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    if (!file || file.type.substring(0, 5) !== 'image') return;

    setForm((pre: CatData) => {
      return { ...pre, imageUrl: file ?? 'null' };
    });
  };

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setForm((pre: CatData) => {
      return { ...pre, description: value };
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 등록 form state 보내준다.
    navigate('/');
  };

  const formValid = useMemo(() => {
    return Object.values(form).every(data => data);
  }, [form]);

  return (
    <Form onSubmit={handleSubmit}>
      <ImageLoader>
        <img src={preview ?? defaultImg} alt='preview' />
        <input type='file' accept='image/*' onChange={handleImageUpload} />
      </ImageLoader>
      <textarea
        name='description'
        cols={30}
        rows={10}
        placeholder='어떤 고양이였는지 설명해 주세요!'
        autoFocus
        onChange={handleDescription}
      ></textarea>
      <button disabled={!formValid}>등록</button>
    </Form>
  );
};
export default UploadPage;
