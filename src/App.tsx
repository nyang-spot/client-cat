import GlobalLayout from '@pages/_layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const LoginPage = React.lazy(() => import('@pages/Login'));
const MainPage = React.lazy(() => import('@pages/Main'));
const RankingPage = React.lazy(() => import('@pages/Ranking'));
const UploadPage = React.lazy(() => import('@pages/Upload'));
const MyPage = React.lazy(() => import('@pages/MyPage'));

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<LoginPage />} />
        <Route path='main' element={<MainPage />} />
        <Route path='ranking' element={<RankingPage />} />
        <Route path='upload' element={<UploadPage />} />
        <Route path='my-page' element={<MyPage />} />
      </Route>
    </Routes>
  );
};

export default App;
