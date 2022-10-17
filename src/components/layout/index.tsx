import React, { ReactNode } from 'react';
import Back from './Back';
import { LayoutWrapper } from './Layout.style';
import TabBar from './TabBar';
import { useLocation } from 'react-router-dom';

interface Props {
  children: ReactNode;
  hasTab: boolean;
  hasBack: boolean;
}
const AppLayout = ({ children, hasTab, hasBack }: Props) => {
  const { pathname } = useLocation();
  return (
    <>
      <LayoutWrapper style={{ paddingBottom: hasTab ? '60px' : '' }}>
        {hasBack && <Back />}
        <div style={{ padding: pathname !== '/main' && pathname !== '/' ? '30px' : '' }}>{children}</div>
      </LayoutWrapper>
      {hasTab && <TabBar />}
    </>
  );
};

export default AppLayout;
