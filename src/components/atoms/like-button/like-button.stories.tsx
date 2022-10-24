import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LikeButton from './';

export default {
  title: 'Components/CatDetail/like-button',
  component: LikeButton,
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = args => <LikeButton {...args} />;

export const UnLiked = Template.bind({});
UnLiked.args = {
  isLiked: false,
  likes: 0,
  onLike: () => ({}),
};

export const Liked = Template.bind({});
Liked.args = {
  isLiked: true,
  likes: 1,
  onLike: () => ({}),
};
