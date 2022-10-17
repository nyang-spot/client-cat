import styled from "@emotion/styled";

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 1rem;
  padding: 1em;
  
  h2 {
    color: #E8B273;
    font-size: 26px;
  }

  .upload-comment {
    font-size: 13px;
  }

  textarea {
    font-size: 16px;
    font-family: inherit;
    padding: 1rem;
    width: 100%;
    height: 7rem;
    border: solid 0.15rem gray;
    border-radius: 5px;
    outline: none;
    resize: none;

    &:focus {
      border: solid 0.15rem #E8B273;
    }

    &::placeholder {
      font-size: 16px;
    }
  }

  button {
    font-size: 16px;
    width: 10rem;
    height: 3rem;
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
    background-color: #E8B273;

    :disabled {
      background-color: gray;
    }
  }
`;

export const ImageLoader = styled.label`
  width: 160px;
  height: 160px;
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