import React, { Component, ChangeEvent, MouseEvent } from 'react';
import styles from './searchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export interface State {
    searchQuery: string
};

class SearchBar extends Component<{}, State> {
    constructor() {
        super(null);
        this.state = {
            searchQuery: ""
        };
    }

    render() {
        return (
            <div className={styles.SearchBar}>
                <form className={styles.SearchBar__bar}>
                    <Link href="/">
                        <figure className={styles.SearchBar__bar__logo}>
                            <img src="/mercadolivre-logo.png" alt="Mercado Livre logo" />
                        </figure>
                    </Link>
                    <input className={styles.SearchBar__bar__text}
                        type="text"
                        placeholder="Digite aqui sua busca"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.searchQuery}
                    />
                    <Link href={`/${this.state.searchQuery}`} >
                        <button className={styles.SearchBar__bar__button}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                </form>
            </div>
        )
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchQuery: e.target.value })
    }
}

export default SearchBar;