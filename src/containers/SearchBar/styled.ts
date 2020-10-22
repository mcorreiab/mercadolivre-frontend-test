import styled from "styled-components";

const lightGray = "#eeeeee";

export const Div = styled.div`
  padding: 1em 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Figure = styled.figure`
  margin: 0 auto;
  flex-basis: 80px;
  width: 100%;
  height: auto;
  padding: 0;
  padding-right: 3%;
`;

export const MercadoLivreImg = styled.img`
  padding: 0;
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 0 none ${lightGray};
  padding: 9px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  width: 100%;

  &::placeholder {
    color: #999999;
    font-size: 18px;
    font-weight: 300;
  }
`;

export const Button = styled.button`
  flex-basis: 55px;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: auto;
  border: 0 ${lightGray};
  padding: 8px;
`;

export const SearchImage = styled.img`
  height: 100%;
  width: auto;
`;
