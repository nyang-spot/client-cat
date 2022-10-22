import { styled } from 'twin.macro';

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
  padding-top: 4px;
  padding-bottom: 4px;
  bottom: 0;
  height: 60px;
  background-color: white;
  border-top: 1px solid #d9d9d9;
  z-index: 999;
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

export const TabBarName = styled.p`
  font-size: 11px;
  font-weight: 600;
`;

export const CustomLink = styled(NavLink)`
  &.active {
    li {
      & p {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
      }
      & svg {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
