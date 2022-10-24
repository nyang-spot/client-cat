import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InfoBox from './';
import catImg from '@assets/icons/cat3.svg';

export default {
  title: 'Components/CatDetail/info-box',
  component: InfoBox,
} as ComponentMeta<typeof InfoBox>;

const Template: ComponentStory<typeof InfoBox> = args => <InfoBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  isValidUrl: true,
  image: catImg,
  description: '귀여운 길고양이',
};
