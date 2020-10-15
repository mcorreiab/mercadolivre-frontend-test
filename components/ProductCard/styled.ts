import styled from 'styled-components';
import media, { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    desktop: "900px"
});

const backgroundColor = "#fff";

export const Div = styled.div`
    display: flex;
    background-color: ${backgroundColor};
    font-size: 0.8em;
    padding: 2%;
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    max-width: 125px;
    margin-right: 5%;

    ${media.greaterThan("medium")`
        margin-right: 2%;
    `}
`;

export const PriceParagraph = styled.p`
    font-size: 1.5em;
    font-weight: 300;
`;

export const CityParagraph = styled.p`
    display: inline-block;
    margin-bottom: 0;
    padding: 1.5%;
    background-color: #e8e8e8;
    color: #706e6e;
    font-size: 0.8em;

    ${customMedia.greaterThan("desktop")`
        position: absolute;
        top: 5vh;
        right: 5vh;
        font-size: 1em;
        background-color: ${backgroundColor};
    `}
`;