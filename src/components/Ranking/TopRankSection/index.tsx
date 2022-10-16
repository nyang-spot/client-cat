/* eslint-disable react/react-in-jsx-scope */
import HeartIcon from '@components/Ranking/Icons/HeartIcon';
import StarIcon from '@components/Ranking/Icons/StarIcon';
import { RankLocationHighlight, RankSubTitle, RankTitleContainer } from '@components/Ranking/Rank.style';
import {
  TopRankBlurBox,
  TopRankContent,
  TopRankDescription,
  TopRankDescriptionContainer,
  TopRankLike,
} from '@components/Ranking/TopRankSection/TopRankSection.styled';

// TODO: Models타입이 확정나면 cats의 타입을 지정해줘야합니다.
const TopRankSection = ({ cats }: { cats: Array<any> }) => {
  return (
    <section>
      <RankTitleContainer>
        <StarIcon
          style={{
            marginRight: 5,
          }}
        />
        <RankSubTitle>
          <RankLocationHighlight>강남구</RankLocationHighlight> 1위 후보 😎
        </RankSubTitle>
      </RankTitleContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {cats.slice(0, 2).map(cat => (
          <TopRankContent key={cat.id}>
            <img src={cat.imageUrl} height='100%' />
            <TopRankDescriptionContainer>
              <TopRankDescription>{cat.description}</TopRankDescription>
              <TopRankLike>
                <HeartIcon
                  style={{
                    marginRight: 5,
                  }}
                />
                {cat.likes}
              </TopRankLike>
              <TopRankBlurBox />
            </TopRankDescriptionContainer>
          </TopRankContent>
        ))}
      </div>
    </section>
  );
};
export default TopRankSection;
