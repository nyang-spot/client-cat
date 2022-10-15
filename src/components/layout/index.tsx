import React, {ReactNode}from 'react';
import { LayoutWrapper } from './Layout.style';
interface Props {
  children: ReactNode;
}
const AppLayout = ({children}:Props) =>{

  return (
    <LayoutWrapper>{children}</LayoutWrapper>
  )
};

export default AppLayout;