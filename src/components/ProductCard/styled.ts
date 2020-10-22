import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "900px",
});

const backgroundColor = "#fff";

export const Div = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 125px) 60%;
  grid-template-rows: 30px 90px;
  background-color: ${backgroundColor};
  font-size: 0.8em;
  padding: 2%;
  column-gap: 5%;
  grid-template-areas:
    "image city"
    "image description";

  ${customMedia.greaterThan("desktop")`
    grid-template-columns: 15% 55% 20%;
    grid-template-areas: 
    "image description city"
    "image description .";
  `}
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 125px;
  margin-right: 0;
  align-self: center;
  grid-area: image;
`;

export const PriceParagraph = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  grid-area: description;
  margin: 0 0 16px;
  padding: 0;

  ${customMedia.greaterThan("desktop")`
    margin: 16px 0 32px;
  `}
`;

export const TitleParagraph = styled.p`
  margin: 0;
`;

export const CityParagraph = styled.p`
  display: inline-block;
  background-color: #e8e8e8;
  color: #706e6e;
  font-size: 0.8em;
  grid-area: city;
  justify-self: start;
  padding: 4px;
  align-self: center;

  ${customMedia.greaterThan("desktop")`
        font-size: 1em;
        background-color: ${backgroundColor};
        justify-self: center;
        margin-top: 16px;
    `}
`;
