import React from 'react';
import { CustomLink, LayoutTabBar, TabBarName } from './Layout.style';
import Icon from '@components/icon';

const TabBar = () => {
  const TabItem = [
    {
      path: '/main',
      icon: <Icon type='MAP' />,
      text: '메인',
    },
    {
      path: '/ranking',
      icon: <Icon type='RANK' />,
      text: '짱 고양이',
    },
    {
      path: '/upload',
      icon: <Icon type='UPLOAD' />,
      text: '업로드',
    },
    {
      path: '/my-page',
      icon: <Icon type='PERSON' />,
      text: '집사',
    },
  ];
  return (
    <LayoutTabBar>
      <ul>
        {TabItem.map((v, i) => (
          <CustomLink key={i} to={v.path}>
            <li style={{textAlign:'center'}}>
              {v.icon}
              <TabBarName>{v.text}</TabBarName>
            </li>
          </CustomLink>
        ))}
      </ul>
    </LayoutTabBar>
  );
};

export default TabBar;
