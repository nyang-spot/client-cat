import React, { ReactNode } from 'react';
import Back from './Back';
import { LayoutWrapper } from './Layout.style';
import TabBar from './TabBar';
interface Props {
  children: ReactNode;
  hasTab: boolean;
  hasBack: boolean;
}
const AppLayout = ({ children, hasTab, hasBack }: Props) => {
  return (
    <>
      <LayoutWrapper style={{ paddingBottom: hasTab ? '60px' : '' }}>
        {hasBack && <Back />}
        <div style={{ padding: 8 }}>{children}</div>
      </LayoutWrapper>
      {hasTab && <TabBar />}
    </>
  );
};

export default AppLayout;
