import login_btn from '../../assets/kakao_icon.png';

import { ReactComponent as LogoImg } from '../../assets/logo_img.svg';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { Alert, LogoImgWrapper, DescriptionWrapper, LoginBtn, LoginBtnWrapper, LoginWrapper } from './Login.style';

const LoginLayout = () => {
  const navi = useNavigate();
  const user = localStorage.getItem('user');
  const timeout = setTimeout(() => {
    setAlertOn(false);
  }, 3000);

  /// TODO: error 발생시 alert 띄우기
  const [isAlertOn, setAlertOn] = useState(false);

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    /// 임시로 받는 데이터 (현재 단일 요청에, 리패치를 요하는 데이터가 아니므로 useQuery 사용X)
    await axios
      .get('http://13.125.74.165:3000/login')
      .then(response => {
        const stringified = JSON.stringify(response.data);
        localStorage.setItem('user', stringified);
        navi('/main');
      })
      .catch(error => {
        setAlertOn(true);

        clearTimeout(timeout);
      });
  };

  useEffect(() => {
    if (user) {
      navi('/main');
    }
  }, []);

  return (
    <LoginWrapper>
      <Alert style={isAlertOn ? { display: 'block' } : { display: 'none' }}>※ 로그인에 실패하였습니다.</Alert>
      <LogoImgWrapper>
        <LogoImg fill='#000' />
      </LogoImgWrapper>
      <LoginBtnWrapper>
        <DescriptionWrapper>
          <hr />
          우리 동네 짱고양이를 만나보세요!
          <hr />
        </DescriptionWrapper>

        <LoginBtn onClick={handleLogin}>
          {/* svg 사용시 폰트가 깨짐 */}
          <img src={login_btn} />
        </LoginBtn>
      </LoginBtnWrapper>
    </LoginWrapper>
  );
};

export default LoginLayout;
