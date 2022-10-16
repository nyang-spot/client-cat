import LoginLayout from '@components/login';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  return <LoginLayout />;
};

export default LoginPage;
