import { ReactComponent as MapIcon } from '@assets/icons/map.svg';
import { ReactComponent as UploadIcon } from '@assets/icons/upload.svg';
import { ReactComponent as RankIcon } from '@assets/icons/rank.svg';
import { ReactComponent as PersonIcon } from '@assets/icons/person.svg';
import { ReactComponent as BackIcon } from '@assets/icons/back.svg';
import { ReactComponent as BrickIcon } from '@assets/icons/brick.svg';
import { ReactComponent as StarIcon } from '@assets/icons/star.svg';
import { ReactComponent as HeartIcon } from '@assets/icons/heart.svg';
import { ReactComponent as MarkerIcon } from '@assets/icons/marker.svg';
import { ReactComponent as Cat3Icon } from '@assets/icons/cat3.svg';
import { ReactComponent as LogoIcon } from '@assets/icons/logo_img.svg';
/* images */
import kakaoImg from '@assets/images/kakao_icon.png';
import defaultImg from '@assets/images/defaultImg.png';
import location from '@assets/images/locationImg.jpeg';


export type IconType = keyof typeof ICONS;
export const ICONS= {
  MAP: MapIcon,
  UPLOAD: UploadIcon,
  RANK: RankIcon,
  PERSON: PersonIcon,
  BACK:BackIcon,
  MARKER:MarkerIcon,
  HEART:HeartIcon,
  BRICK:BrickIcon,
  STAR:StarIcon,
  CAT3:Cat3Icon,
  LOGO:LogoIcon,
} as const;

export const IMAGE_PATH = {
  DEFAULT: defaultImg,
  KAKAO: kakaoImg,
  LOCATION: location,
} as const;
