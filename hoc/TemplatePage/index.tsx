import React, { ReactNode } from "react";
import SearchBar from "../../containers/SearchBar";
import * as styled from "./styled";

const templatePage = (props: { children?: ReactNode }) => (
  <styled.Div>
    <styled.Header>
      <SearchBar />
    </styled.Header>
    <styled.Main>{props.children}</styled.Main>
  </styled.Div>
);

export default templatePage;
