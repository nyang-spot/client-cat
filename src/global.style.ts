import { css } from '@emotion/react';

export const globalStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  #root {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: auto;
    background-color: #fafafa;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  button {
    cursor: pointer;
    border: none;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
