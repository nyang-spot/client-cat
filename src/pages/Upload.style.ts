import styled from "@emotion/styled";

export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 2rem;
  padding: 1em;
  
  textarea {
    font-size: 1rem;
    font-family: inherit;
    padding: 1rem;
    width: 100%;
    height: 8rem;
    border: solid 0.15rem gray;
    border-radius: 5px;
    outline: none;
    resize: none;

    &:focus {
      border: solid 0.15rem orange;
    }

    &::placeholder {
      font-size: 1.25rem;
    }
  }

  button {
    padding: 0.5em 1em;
    border-radius: 5px;
    color: white;
    background-color: orange;

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