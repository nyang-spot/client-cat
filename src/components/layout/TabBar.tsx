import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutTabBar, TabBarItem, TabBarName } from './Layout.style';
import Icon from '@components/icon';

const TabBar = () => {
  const { pathname } = useLocation();

  const TabItem = useMemo(
    () => [
      {
        path: '/main',
        icon: <Icon type='MAP'/>,
        text: '메인',
        isActive: pathname === '/main',
      },
      {
        path: '/ranking',
        icon: <Icon type='RANK'/>,
        text: '짱 고양이',
        isActive: pathname === '/ranking',
      },
      {
        path: '/upload',
        icon: <Icon type='UPLOAD'/>,
        text: '업로드',
        isActive: pathname === '/upload',
      },
      {
        path: '/my-page',
        icon: <Icon type='PERSON'/>,
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
