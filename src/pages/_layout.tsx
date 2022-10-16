import AppLayout from '@components/layout';
import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const GlobalLayout = () => {
  const { pathname } = useLocation();
  return (
    <AppLayout hasTab={pathname === '/' ? false : true} hasBack={pathname === '/' ? false : true}>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export default GlobalLayout;
