/* eslint-disable react/react-in-jsx-scope */
import Icon from '@components/icon';
import {
  PopularRankLikes,
  PopularRankDescription,
  PopularRankImage,
  PopularRankList,
} from '@components/Ranking/PopularRankSection/PopularRankSection.styled';
import { RankLocationHighlight, RankSubTitle, RankTitleContainer } from '@components/Ranking/Rank.style';
import CateResponse from '@models/catResponse';

const PopularRankSection = ({ cats }: { cats: Array<CateResponse> }) => {
  return (
    <section>
      <RankTitleContainer>
        <Icon type='BRICK' cssProps={{ marginRight: 5 }} />
        <RankSubTitle>
          <RankLocationHighlight>강남구</RankLocationHighlight>에서 가장 인기 있는 냥이들 🥳
        </RankSubTitle>
      </RankTitleContainer>
      {cats.slice(2, cats.length).map(cat => (
        <PopularRankList key={cat.id}>
          <PopularRankImage>
            <img src={cat.image} height='100%' width='100%' />
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
              <Icon
                type='HEART'
                cssProps={{
                  marginTop: 1,
                  marginRight: 5,
                }}
              />
              <PopularRankLikes>{cat._count.likes}</PopularRankLikes>
            </div>
          </div>
        </PopularRankList>
      ))}
    </section>
  );
};
export default PopularRankSection;
