/* eslint-disable react/react-in-jsx-scope */

import Heart from '@components/Ranking/Heart';
import {
  LargeContainer,
  RankLargeImage,
  RankList,
  RankContainer,
  RankImage,
  HeartContainer,
} from '@components/Ranking/Rank.style';
import { css } from '@emotion/react';
import data from './catData.json';

const Ranking = () => {
  const cats = data;
  return (
    <div>
      <h1>냥 파이트</h1>
      <LargeContainer>
        <RankLargeImage />
        <h1>vs</h1>
        <RankLargeImage />
      </LargeContainer>
      <RankContainer>
        {cats.map(cat => (
          <RankList css={css} key={cat.id}>
            <RankImage />
            {cat.description}
            <HeartContainer>
              <Heart
                style={{
                  marginLeft: 'auto',
                }}
              />
              {cat.likes}
            </HeartContainer>
          </RankList>
        ))}
      </RankContainer>
    </div>
  );
};
export default Ranking;
