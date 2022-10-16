/* eslint-disable react/react-in-jsx-scope */

import PopularRankSection from '@components/Ranking/PopularRankSection';
import { RankTitle, RankLocationHighlight } from '@components/Ranking/Rank.style';
import TopRankSection from '@components/Ranking/TopRankSection';
import data from './catData.json';

const Ranking = () => {
  const cats = data;
  return (
    <div
      style={{
        padding: 30,
      }}
    >
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
