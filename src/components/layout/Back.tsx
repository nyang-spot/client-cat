import Icon from '@components/icon';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from './Layout.style';

const Back = () =>{
  const navigate = useNavigate();
  return (
    <BackButton onClick={() => navigate(-1)}>
      <Icon type='BACK'/>
    </BackButton>
  )
}

export default Back;