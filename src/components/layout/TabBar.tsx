import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutTabBar, TabBarItem, TabBarName } from './Layout.style';
import MapIcon from '@components/layout/Icons/MapIcon';
import RankingIcon from '@components/layout/Icons/RankingIcon';
import UploadIcon from '@components/layout/Icons/UploadIcon';
import MyPageIcon from '@components/layout/Icons/MyPageIcon';

const TabBar = () => {
  const { pathname } = useLocation();

  const TabItem = useMemo(
    () => [
      {
        path: '/main',
        icon: <MapIcon />,
        text: '메인',
        isActive: pathname === '/main',
      },
      {
        path: '/ranking',
        icon: <RankingIcon />,
        text: '짱 고양이',
        isActive: pathname === '/ranking',
      },
      {
        path: '/upload',
        icon: <UploadIcon />,
        text: '업로드',
        isActive: pathname === '/upload',
      },
      {
        path: '/my-page',
        icon: <MyPageIcon />,
        text: '집사',
        isActive: pathname === '/my-page',
      },
    ],
    [pathname]
  );
  return (
    <LayoutTabBar>
      <ul>
        {TabItem.map((v, i) => (
          <Link key={i} to={v.path}>
            <TabBarItem isActive={v.isActive}>
              {v.icon}
              <TabBarName>{v.text}</TabBarName>
            </TabBarItem>
          </Link>
        ))}
      </ul>
    </LayoutTabBar>
  );
};

export default TabBar;
