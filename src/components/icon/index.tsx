import { CSSObject } from '@emotion/react';
import { ICONS, IconType } from '@utils/assets';
import React from 'react';
interface Props {
  type: IconType;
  fill?: string;
  width?: number;
  height?: number;
  cssProps? : CSSObject
}
const Icon = ({ type, width, height, fill, cssProps}: Props) => {
  const GetIcon = ICONS[type];
  let prop = {};
  prop = fill ? { ...prop, fill: fill } : { ...prop };
  prop = width ? { ...prop, width: width } : { ...prop };
  prop = height ? { ...prop, height: height } : { ...prop };
  return <GetIcon {...prop} css={cssProps} />;
};

export default Icon;
