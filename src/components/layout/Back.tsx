import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from './Layout.style';
import { ReactComponent as BackIcon } from '@assets/back.svg';

const Back = () =>{
  const navigate = useNavigate();
  return (
    <BackButton onClick={() => navigate(-1)}>
      <BackIcon />
    </BackButton>
  )
}

export default Back;