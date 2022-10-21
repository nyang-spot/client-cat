import { ReactComponent as MapIcon } from '@assets/icons/map.svg';
import { ReactComponent as UploadIcon } from '@assets/icons/upload.svg';
import { ReactComponent as RankIcon } from '@assets/icons/rank.svg';
import { ReactComponent as PersonIcon } from '@assets/icons/person.svg';

export type IconType = keyof typeof ICONS;
export const ICONS= {
  MAP: MapIcon,
  UPLOAD: UploadIcon,
  RANK: RankIcon,
  PERSON: PersonIcon,
} as const;

const getImagePath = (path: string) => `@assets/images/${path}`;
export const IMAGE_PATH = {
  DEFAULT: getImagePath('defaultImg.png'),
  KAKAO: getImagePath('kakao_icon.png'),
  LOCATION: getImagePath('locationImg.png'),
} as const;
