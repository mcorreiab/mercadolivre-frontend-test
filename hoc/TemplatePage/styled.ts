import styled from 'styled-components';
import media from 'styled-media-query'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
`;

export const Header = styled.header`
    background-color: #fff159;

    > * {
        width: 90%;
        max-width: 900px;
        margin: 0 auto;
    }

    ${media.greaterThan("small")`
        > * {
            width: 70%;
        }
    `}
`;

export const Main = styled.main`
    background-color: #e7e7e7;
    flex: 1 0 80%;
    padding-top: 16px;

    > * {
        width: 90%;
        max-width: 900px;
        margin: 0 auto;
    }

    ${media.greaterThan("small")`
        > * {
            width: 70%;
        }
    `}
`;