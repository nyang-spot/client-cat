import login_btn from '../../assets/kakao_icon.png';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as LogoImg } from '../../assets/logo_img.svg';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { LoginBtn, DescriptionWrapper, LoginWrapper, LogoImgWrapper, LogoWrapper } from './Login.style';

const LoginLayout = () => {
  const navi = useNavigate();
  const stringifiedData = localStorage.getItem('user');

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    /// 임시로 받는 데이터 (현재 단일 요청에, 리패치를 요하는 데이터가 아니므로 useQuery 사용X)
    const { data } = await axios.get('/login');
    localStorage.setItem('user', data);
    navi('/main');
  };

  useEffect(() => {
    if (stringifiedData) {
      navi('/main');
    }
  }, []);

  return (
    <LoginWrapper>
      <LogoImgWrapper>
        <LogoImg fill='#f8f9fa' />
      </LogoImgWrapper>
      <LogoWrapper>
        <Logo fill='#f8f9fa' />
      </LogoWrapper>
      <DescriptionWrapper>
        <hr />
        우리 동네 짱고양이를 만나보세요!
        <hr />
      </DescriptionWrapper>

      <LoginBtn onClick={handleLogin}>
        {/* svg 사용시 폰트가 깨짐 */}
        <img src={login_btn} />
      </LoginBtn>
    </LoginWrapper>
  );
};

export default LoginLayout;
