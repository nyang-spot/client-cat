import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 24px;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
  background-color: black;
`;

export const Image = styled.img``;

export const Description = styled.div``;

export const LikeButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #fabe93;
  color: #fff;
`;
