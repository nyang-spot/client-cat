import AppLayout from '@components/layout';
import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ReactQueryDevtools } from "react-query/devtools";


const GlobalLayout = () => {
  const { pathname } = useLocation();
  return (
    <AppLayout hasTab={pathname === '/' ? false : true} hasBack={pathname === '/' ? false : true}>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
      </Suspense>
    </AppLayout>
  );
};

export default GlobalLayout;
