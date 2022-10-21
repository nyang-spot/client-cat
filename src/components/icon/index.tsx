import { ICONS, IconType } from '@utils/assets';
import React from 'react';
interface Props {
  type: IconType;
  fill?: string;
  width?: number;
  height?: number;
}
const Icon = ({ type, width, height, fill = 'black' }: Props) => {
  const GetIcon = ICONS[type];
  let prop = {};
  width ? (prop = { ...prop, width: width }) : { ...prop };
  height ? (prop = { ...prop, height: height }) : { ...prop };
  return <GetIcon fill={fill} {...prop} />;
};

export default Icon;
