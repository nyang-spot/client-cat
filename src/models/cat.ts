export interface Cat {
  id: number;
  description: string;
  imageUrl: string;
  address: string;
  likes: number;
  isLiked: boolean;
}

// 임시 가짜 데이터.

export const FAKE_CAT = {
  id: 234,
  description: '이 고양이는 커여움.',
  imageUrl: 'http://placekitten.com/200/300',
  address: '강남구',
  likes: 23,
  isLiked: false,
};
