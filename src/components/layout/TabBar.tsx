import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LayoutTabBar, TabBarItem } from './Layout.style';
import { ReactComponent as HomeIcon } from '@assets/home.svg';
import { ReactComponent as RankIcon } from '@assets/rank.svg';
import { ReactComponent as UploadIcon } from '@assets/upload.svg';
import { ReactComponent as PersonIcon } from '@assets/person.svg';




const TabBar = () => {
  const TabItem = useMemo(
    () => [
      {
        path: '/main',
        icon: <HomeIcon />,
        text: 'HOME',
      },
      {
        path: '/ranking',
        icon: <RankIcon />,
        text: 'RANK',
      },
      {
        path: '/upload',
        icon: <UploadIcon />,
        text: 'UPLOAD',
      },
      {
        path: '/my-page',
        icon: <PersonIcon />,
        text: 'MY',
      },
    ],
    []
  );
  return (
    <LayoutTabBar>
      <ul>
        {TabItem.map((v, i) => (
          <Link key={i} to={v.path}>
            <TabBarItem>
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
