import login_btn from '../../assets/kakao_icon.png';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as LogoImg } from '../../assets/logo_img.svg';
import { ReactComponent as Warning } from '../../assets/warning.svg';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { LoginBtn, DescriptionWrapper, LoginWrapper, LogoImgWrapper, LogoWrapper, Alert } from './Login.style';

const LoginLayout = () => {
  const navi = useNavigate();
  const user = localStorage.getItem('user');

  /// TODO: error 발생시 alert 띄우기
  const [isAlertOn, setAlertOn] = useState(false);

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    /// 임시로 받는 데이터 (현재 단일 요청에, 리패치를 요하는 데이터가 아니므로 useQuery 사용X)
    await axios
      .get('/login')
      .then(response => {
        const stringified = JSON.stringify(response);
        localStorage.setItem('user', stringified);
        navi('/main');
      })
      .catch(error => {
        setAlertOn(true);

        setTimeout(() => {
          setAlertOn(false);
        }, 5000);
      });
  };

  useEffect(() => {
    if (user) {
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
