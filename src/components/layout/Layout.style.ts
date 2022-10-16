import styled from '@emotion/styled';

export const LayoutWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 480px;
  background-color: #fff;
`;

export const LayoutTabBar = styled.section`
  position: fixed;
  width: 100%;
  max-width: 480px;
  bottom: 0;
  height: 60px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
  & ul {
    height: 100%;
    padding: 12px 24px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BackButton = styled.span`
  position: fixed;
  top: 12px;
  z-index: 10;
  width: 24px;
  height: 7px;
  left: 12px;
  /*미디어 쿼리 적용 */
  @media (min-width: 480px) {
    left: 50%;
    transform: translate(-230px, 0);
  }
  cursor: pointer;
`;

export const TabBarItem = styled.li`
  text-align: center;
`;
