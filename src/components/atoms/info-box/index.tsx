import { CatInfoBox, Description, Image, ImageWrapper } from '@components/main/CatDetail.style';
import { IMAGE_PATH } from '@utils/assets';
import React from 'react';
interface Props {
  isValidUrl: boolean;
  image: string;
  description: string;
}
const InfoBox = ({isValidUrl, image, description}: Props) => {
  return (
    <CatInfoBox>
      <ImageWrapper>
        <Image src={isValidUrl ? image ?? IMAGE_PATH.DEFAULT : IMAGE_PATH.DEFAULT} />
      </ImageWrapper>
      <Description>{description}</Description>
    </CatInfoBox>
  );
};

export default InfoBox;
