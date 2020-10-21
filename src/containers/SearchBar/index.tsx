import React, { Component, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import * as styled from "./styled";

export interface State {
  searchQuery: string;
}

class SearchBar extends Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      searchQuery: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <styled.Div>
        <styled.Form>
          <Link href="/">
            <styled.Figure>
              <styled.Img
                src="/mercadolivre-logo.png"
                alt="Mercado Livre logo"
              />
            </styled.Figure>
          </Link>
          <styled.Input
            type="text"
            placeholder="Digite aqui sua busca"
            onChange={this.handleChange.bind(this)}
            value={searchQuery}
          />
          <Link href={`/${searchQuery}`} data-testid="search button">
            <styled.Button onClick={null}>
              <FontAwesomeIcon icon={faSearch} />
            </styled.Button>
          </Link>
        </styled.Form>
      </styled.Div>
    );
  }
}

export default SearchBar;
