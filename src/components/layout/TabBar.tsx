import React from 'react';
import { CustomLink, LayoutTabBar, TabBarName } from './Layout.style';
import Icon from '@components/icon';
import tw from 'twin.macro';

const TabBar = () => {
  const TabItem = [
    {
      path: '/main',
      icon: <Icon type='MAP' fill='#4B4A47' />,
      text: '메인',
    },
    {
      path: '/ranking',
      icon: <Icon type='RANK' fill='#4B4A47' />,
      text: '짱 고양이',
    },
    {
      path: '/upload',
      icon: <Icon type='UPLOAD' fill='#4B4A47' />,
      text: '업로드',
    },
    {
      path: '/my-page',
      icon: <Icon type='PERSON' fill='#4B4A47' />,
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
