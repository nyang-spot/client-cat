export interface Cat {
  id: number;
  description: string;
  image: string;
  address: string;
  _count: {
    likes: number;
  };

  isLiked: boolean;
}

// 임시 가짜 데이터.

// export const FAKE_CAT: { [s: number]: Cat } = {
//   1: {
//     id: 1,
//     description: '이 고양이는 커여움.',
//     imageUrl: 'http://placekitten.com/200/300',
//     address: '강남구',
//     likes: 23,
//     isLiked: false,
//   },
//   2: {
//     id: 2,
//     description: '이 고양이는 사나움.',
//     imageUrl: 'http://placekitten.com/200/300',
//     address: '강남구',
//     likes: 23,
//     isLiked: false,
//   },
//   3: {
//     id: 3,
//     description: '이 고양이는 시니컬함.',
//     imageUrl: 'http://placekitten.com/200/300',
//     address: '강남구',
//     likes: 23,
//     isLiked: false,
//   },
// };
