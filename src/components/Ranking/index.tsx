/* eslint-disable react/react-in-jsx-scope */

import PopularRankSection from '@components/Ranking/PopularRankSection';
import { RankTitle, RankLocationHighlight } from '@components/Ranking/Rank.style';
import TopRankSection from '@components/Ranking/TopRankSection';
import useGetCats from '@hooks/useGetCats';

const Ranking = () => {
  const { data: cats } = useGetCats();
  if (!cats) return null;
  return (
    <div>
      <RankTitle>
        <RankLocationHighlight>강남구</RankLocationHighlight> 짱 고양이
      </RankTitle>
      <div
        style={{
          marginTop: 50,
        }}
      >
        <TopRankSection cats={cats} />
      </div>
      <div
        style={{
          marginTop: 50,
        }}
      >
        <PopularRankSection cats={cats} />
      </div>
    </div>
  );
};
export default Ranking;
