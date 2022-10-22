import { styled } from 'twin.macro';

export const UploadForm = styled.form`
  color: #40444a;
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 50px;
  }

  .comment {
    font-size: 16px;
    margin-bottom: 20px;

    .small {
      color: #b3abbc;
      font-size: 14px;
      margin-top: 4px;
    }
  }

  span {
    color: #e8b273;
  }

  .cat-area {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;

    textarea {
      background: #f5f5f5;
      font-size: 10px;
      font-family: inherit;
      padding: 14px;
      width: 200px;
      height: 100px;
      border: none;
      border-radius: 5px;
      outline: none;
      resize: none;

      &::placeholder {
        font-size: 10px;
      }
    }
  }

  button {
    font-size: 16px;
    color: white;
    justify-self: flex-end;
    align-self: center;
    background-color: #e8b273;
    width: 10rem;
    height: 3rem;
    margin-top: 1.5rem;
    border-radius: 5px;
    padding: 0.5em 1em;

    :disabled {
      background-color: #b3abbc;
    }
  }
`;

export const ImageLoader = styled.label`
  width: 100px;
  height: 100px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;
