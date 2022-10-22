import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Background from '@assets/icons/login_background.svg';

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px)
  }
  
  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate3d(0, 0, 0, 0);
  }
  20%{
   transform: rotate3d(0, 1, 0, 360deg);
  }
  80%{
   transform: rotate3d(0, 1, 0, 360deg);
  }
  100%{
    transform: rotate3d(0, 0, 0, 0);
  }
`;

const hide = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  10%{
    opacity: 1;
    transform: translateY(0);
  }

  70%{
    opacity: 1;
    transform: translateY(0);
  }
  
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
`;

export const Alert = styled.div`
  position: absolute;
  top: 5%;

  display: flex;
  align-items: center;

  height: 38px;
  padding: 10px 30px;

  border-radius: 12px;
  background: #f8f9fa;

  color: gray;

  font-size: 12px;

  animation: ${hide} 3s;
`;

export const LoginWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 480px;
  padding: 0 42px;
  background: url(${Background});
  background-size: cover;

  overflow: hidden;
`;

export const LogoImgWrapper = styled.div`
  width: 100%;
  animation: ${rotate} 7s ease-in-out infinite;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 240px;
  margin-bottom: 10px;

  animation: ${show} 0.6s;
`;

export const DescriptionWrapper = styled.span`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 8px;

  font-size: 12px;
  color: #000;

  animation: ${show} 0.6s;

  > hr {
    width: 20%;
    height: 1px;
    padding: 0 4px;

    border: none;

    background: #000;
    opacity: 0.4;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 92%;
  height: 45px;
  border-radius: 4px;

  background: #fee500;

  animation: ${show} 0.8s;

  transition: 0.2s;

  > img {
    height: 100%;
    object-fit: contain;
  }
  :hover {
    box-shadow: 0 0 10px rgba(160, 160, 160, 0.7);
  }
`;

export const LoginBtnWrapper = styled.div`
  position: absolute;
  bottom: 3%;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
