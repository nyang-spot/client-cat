import React from 'react';
import { CustomLink, LayoutTabBar, TabBarName } from './Layout.style';
import Icon from '@components/icon';

const TabBar = () => {
  const TabItem = [
    {
      path: '/main',
      icon: <Icon type='MAP' fill='black' />,
      text: '메인',
    },
    {
      path: '/ranking',
      icon: <Icon type='RANK' fill='black' />,
      text: '짱 고양이',
    },
    {
      path: '/upload',
      icon: <Icon type='UPLOAD' fill='black' />,
      text: '업로드',
    },
    {
      path: '/my-page',
      icon: <Icon type='PERSON' fill='black' />,
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
