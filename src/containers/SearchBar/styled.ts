import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1023px",
});

export const Div = styled.div`
  padding: 1em 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Figure = styled.figure`
  margin: 0 auto;
  flex: 1 0 25%;
  padding-right: 10px;
  max-width: 60px;
  max-height: 25px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const Input = styled.input`
  flex: 3 0 65%;
  border: 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 2px;
  width: 100%;

  &::placeholder {
    color: #d8d8d8;
  }
`;

export const Button = styled.button`
  flex: 0 1 10%;
  cursor: pointer;

  ${customMedia.greaterThan("desktop")`
        flex: 0 1 5%;
    `}
`;
