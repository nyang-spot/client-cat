import { styled } from 'twin.macro';

export const Container = styled.div`
  width: 100%;
  height: 21rem;

  #map {
    position: relative;
    height: 16rem;
    margin-bottom: 0.5rem;

    :focus {
      outline: none;
    }

    .marker {
      z-index: 100;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 3.5rem;
      height: 3.5rem;
      pointer-events: none;

      img {
        width: inherit;
        height: inherit;
      }
    }
  }

  .address-area {
    width: 100%;
    height: 2rem;

    .comment {
      font-size: 14px;
    }
  }

  .warning {
    font-size: 13px;
    color: red;
    height: 1rem;
  }
`;
