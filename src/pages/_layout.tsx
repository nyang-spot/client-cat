import AppLayout from '@components/layout';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
};

export default GlobalLayout;
