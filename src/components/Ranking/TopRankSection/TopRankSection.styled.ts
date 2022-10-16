import styled from '@emotion/styled';

export const TopRankContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const TopRankContent = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: 150px;
  height: 150px;
`;
export const TopRankBlurBox = styled.div`
  z-index: 1;
  width: 136px;
  height: 60px;
  position: absolute;
  filter: blur(1px);
  border-radius: 5px;
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.2);
`;
export const TopRankDescriptionContainer = styled.div`
  bottom: 7px;
  left: 7px;
  width: 136px;
  height: 60px;
  position: absolute;
`;
export const TopRankDescription = styled.p`
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  position: absolute;
  z-index: 999;
  font-size: 12px;
  font-weight: 400;
  color: white;
`;
export const TopRankLike = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 10px;
  bottom: 4px;
  z-index: 999;
  font-size: 12px;
  font-weight: 400;
  color: white;
`;
