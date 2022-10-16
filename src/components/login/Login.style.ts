import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

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

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
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

export const LoginWrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 480px;
  padding: 0 42px;

  background: linear-gradient(-45deg, #f5efe6, #e8dfca, #aebdca, #7895b2);
  background-size: 400% 400%;

  overflow: hidden;

  animation: ${gradient} 7s ease-in-out infinite;
`;

export const LogoImgWrapper = styled.div`
  height: 320px;
  margin: 10% 0;
  animation: ${rotate} 7s ease-in-out infinite;

  > svg {
    height: 100%;
  }
`;

export const LogoWrapper = styled.div`
  height: 50px;
  margin-bottom: 10px;

  animation: ${show} 0.6s;

  > svg {
    height: 100%;
  }
`;

export const DescriptionWrapper = styled.span`
  display: flex;
  align-items: center;

  width: 100%;
  margin-bottom: 8px;

  font-size: 12px;
  color: #f8f9fa;

  animation: ${show} 0.6s;

  > hr {
    width: 20%;
    height: 1px;
    padding: 0 4px;

    border: none;

    background: #f8f9fa;
    opacity: 0.4;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
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

export const Alert = styled.div`
  position: absolute;
  top: 12%;

  display: flex;
  align-items: center;

  height: 38px;
  padding: 2px 10px;

  border-radius: 12px;
  background: #f8f9fa;
`;
