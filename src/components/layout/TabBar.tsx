import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutTabBar, TabBarItem } from './Layout.style';
import { ReactComponent as HomeIcon } from '@assets/home.svg';
import { ReactComponent as RankIcon } from '@assets/rank.svg';
import { ReactComponent as UploadIcon } from '@assets/upload.svg';
import { ReactComponent as PersonIcon } from '@assets/person.svg';

const TabBar = () => {
  const { pathname } = useLocation();

  const TabItem = useMemo(
    () => [
      {
        path: '/main',
        icon: <HomeIcon />,
        text: 'HOME',
        isAcitve: pathname === '/main',
      },
      {
        path: '/ranking',
        icon: <RankIcon />,
        text: 'RANK',
        isAcitve: pathname === '/ranking',
      },
      {
        path: '/upload',
        icon: <UploadIcon />,
        text: 'UPLOAD',
        isAcitve: pathname === '/upload',
      },
      {
        path: '/my-page',
        icon: <PersonIcon />,
        text: 'MY',
        isAcitve: pathname === '/my-page',
      },
    ],
    [pathname]
  );
  return (
    <LayoutTabBar>
      <ul>
        {TabItem.map((v, i) => (
          <Link key={i} to={v.path}>
            <TabBarItem isActive={v.isAcitve}>
              {v.icon}
              <p>{v.text}</p>
            </TabBarItem>
          </Link>
        ))}
      </ul>
    </LayoutTabBar>
  );
};

export default TabBar;
