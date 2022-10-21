import React from 'react';
import { LoginBtnWrapper, LogoImgWrapper, LoginWrapper, DescriptionWrapper } from '@pages/Mypage.style';
import Icon from '@components/icon';

const MyPage = () => {
  return (
    <LoginWrapper>
      <LogoImgWrapper>
        <Icon type='LOGO' fill='black' />
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
