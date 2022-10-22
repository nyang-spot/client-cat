/* eslint-disable react/react-in-jsx-scope */

import Icon from './';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Icons',
  component: Icon,
} as unknown as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const StarIcon = Template.bind({});
StarIcon.args = {
  type: 'STAR',
  width: 30,
  height: 30,
};
