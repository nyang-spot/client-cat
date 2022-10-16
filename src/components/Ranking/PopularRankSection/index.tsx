/* eslint-disable react/react-in-jsx-scope */
import BrickIcon from '@components/Ranking/Icons/BrickIcon';
import HeartIcon from '@components/Ranking/Icons/HeartIcon';
import {
  PopularRankLikes,
  PopularRankDescription,
  PopularRankImage,
  PopularRankList,
} from '@components/Ranking/PopularRankSection/PopularRankSection.styled';
import { RankLocationHighlight, RankSubTitle, RankTitleContainer } from '@components/Ranking/Rank.style';

// TODO: Models타입이 확정나면 cats의 타입을 지정해줘야합니다.
const PopularRankSection = ({ cats }: { cats: Array<any> }) => {
  return (
    <section>
      <RankTitleContainer>
        <BrickIcon
          style={{
            marginRight: 5,
          }}
        />
        <RankSubTitle>
          <RankLocationHighlight>강남구</RankLocationHighlight>에서 가장 인기 있는 냥이들 🥳
        </RankSubTitle>
      </RankTitleContainer>
      {cats.slice(2, cats.length).map(cat => (
        <PopularRankList key={cat.id}>
          <PopularRankImage>
            <img src={cat.imageUrl} height='100%' width='100%' />
          </PopularRankImage>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <PopularRankDescription>{cat.description}</PopularRankDescription>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <HeartIcon
                style={{
                  marginTop: 1,
                  marginRight: 5,
                }}
              />
              <PopularRankLikes>{cat.likes}</PopularRankLikes>
            </div>
          </div>
        </PopularRankList>
      ))}
    </section>
  );
};
export default PopularRankSection;
