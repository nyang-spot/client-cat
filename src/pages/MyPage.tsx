import React from 'react';
import { LoginBtnWrapper, LogoImgWrapper, LoginWrapper, DescriptionWrapper } from '@components/login/Login.style';
import { ReactComponent as LogoImg } from '@assets/logo_img.svg';

const MyPage = () => {
  return (
    <LoginWrapper>
      <LogoImgWrapper>
        <LogoImg fill='#000' />
      </LogoImgWrapper>
      <LoginBtnWrapper>
        <DescriptionWrapper>
          <hr />
          아직 준비중입니다.
          <hr />
        </DescriptionWrapper>
      </LoginBtnWrapper>
    </LoginWrapper>
  );
};

export default MyPage;
