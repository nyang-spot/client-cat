import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 22rem;
  
  #map {
    position: relative;
    height: 17rem;

    :focus {
      outline: none;
    }

    .marker {
      z-index: 100;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 4rem;
      height: 4rem;
      pointer-events: none;
    }
  }

  .address-area {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    padding: 0 0.5rem;

    div {
      font-size: 16px;
      width: 70%;
      margin: 0;
    }

    img {
      width: 3rem;
      height: 3rem;

      &:hover{
        cursor: pointer;
      }
    }
  }

  .warning {
    font-size: 13px;
    color: red;
    height: 1rem;
    padding: 0 0.5rem;
  }
`;