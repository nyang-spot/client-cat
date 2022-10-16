import React, { ReactNode } from 'react';
import Back from './Back';
import { LayoutWrapper } from './Layout.style';
import TabBar from './TabBar';
import { css } from '@emotion/css';

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
        <div>{children}</div>
      </LayoutWrapper>
      {hasTab && <TabBar />}
    </>
  );
};

export default AppLayout;
