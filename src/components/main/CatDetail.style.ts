import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  bottom: 12px;
  width: 80%;
  padding: 24px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transform: translateX(-50%);
`;

export const CatInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const Description = styled.div``;

export const LikeButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #fabe93;
  color: #fff;
`;
